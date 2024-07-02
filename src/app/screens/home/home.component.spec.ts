import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
import { Movie } from '../../Interface/movie';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    // Create a spy object for DataService
    mockDataService = jasmine.createSpyObj('DataService', ['getTrendingMovies', 'getRemainingMovies']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [], // Remove HomeComponent from declarations
      providers: [
        { provide: DataService, useValue: mockDataService }
      ]
    }).compileComponents();

    // Create instance of the component and fixture
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update searchData and localStorage on search', () => {
    // Mock search event
    const mockEvent = { target: { value: 'test search' } } as unknown as Event;

    // Trigger search method
    component.search(mockEvent);

    // Assert that searchData is updated
    expect(component.searchData).toEqual('test search');

    // Assert that localStorage is updated
    const storedData = localStorage.getItem('searchData');
    expect(storedData).toEqual('test search');
  });

  it('should filter movies based on search input', () => {
    // Mock movies data
    const mockMovies: Movie[] = [
      {
        title: 'Movie 1',
        thumbnail: {
          regular: { small: 'regular_small_1.jpg', medium: 'regular_medium_1.jpg', large: 'regular_large_1.jpg' }
        },
        year: 2020,
        category: 'Action',
        rating: 'PG-13',
        isBookmarked: false,
        isTrending: true
      },
      {
        title: 'Movie 2',
        thumbnail: {
          regular: { small: 'regular_small_2.jpg', medium: 'regular_medium_2.jpg', large: 'regular_large_2.jpg' }
        },
        year: 2021,
        category: 'Comedy',
        rating: 'R',
        isBookmarked: true,
        isTrending: true
      }
    ];

    component.movie = mockMovies;

    // Set search data
    component.searchData = 'movie 1';

    // Call filterMovies method
    const filteredMovies = component.filterMovies(mockMovies);

    // Assert that filtering works correctly
    expect(filteredMovies.length).toEqual(1);
    expect(filteredMovies[0].title).toEqual('Movie 1');
  });
});
