// ! Two Ways of Listenings to Observables

// Use this when you care only about the next value
// This is the on that you will use most of the time
example$.subscribe((value) => console.log('Emitted', value));

// Use this when you explicitly care about
// either the error or when the observable completes
example$.subscribe({
  next: (value) => console.log('Emitted', value),
  error: (error) => console.log('Error', error),
  complete: () => console.log('Complete'),
});
