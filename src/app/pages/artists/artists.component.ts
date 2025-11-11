type ArtistCard = {
  name: string;
  genre: string;
  bio: string;
  image: string;
};

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent {
  searchQuery: string = '';
  filteredArtists: ArtistCard[] = [];
  readonly artists: ArtistCard[] = [
    {
      name: 'Luna Waves',
      genre: 'Ambient / Dreampop',
      bio: 'Paisajes sonoros grabados en analógico con un enfoque cinematográfico y delicado.',
      image: 'assets/images/artists/artist-1.svg',
    },
    {
      name: 'Club Prisma',
      genre: 'Synthwave',
      bio: 'Productor barcelonés que mezcla ritmos retro con arreglos modernos para la pista.',
      image: 'assets/images/artists/artist-2.svg',
    },
    {
      name: 'Valle Naciente',
      genre: 'Folk experimental',
      bio: 'Colectivo que trabaja con instrumentos tradicionales y capas orquestales.',
      image: 'assets/images/artists/artist-3.svg',
    },
  ];

    searchArtists(): void {
    const query = this.searchQuery.toLowerCase().trim();
    if(!query) {
      this.filteredArtists = this.artists;
      return;
    }
    this.filteredArtists = this.artists.filter(artist =>
    artist.name.toLowerCase().includes(query) 
    );
  }
}
