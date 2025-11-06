import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      bio: [''],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    this.userService.me().subscribe((user) => {
      this.profileForm.patchValue({
        username: user.username,
        bio: user.bio || '',
        imageUrl: user.avatarUrl || '',
      });
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      this.userService.patchMe().subscribe({
        next: (response) => {
          console.log('Profile update successful:', response);
        },
        error: (error) => {
          console.error('Profile update failed:', error);
        },
      });
    }
  }
}
