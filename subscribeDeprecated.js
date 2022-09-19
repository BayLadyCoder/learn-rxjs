example$.subscribe(
  // First Argument: Next
  (value) => {
    console.log(
      'The first function is called whenever a value is emitted.',
      value
    );
  },
  // Second Argument: Error
  (error) => {
    console.error(
      'The second function is called if an error shows up in the variable.',
      error
    );
  },
  // Third Argument: Complete
  () => {
    console.log(
      'The third function is called whenever the observable completes.'
    );
  }
);

// ! Ignore the second argument
example$.subscribe(
  // First Argument: Next
  (value) => {
    console.log(
      'The first function is called whenever a value is emitted.',
      value
    );
  },
  // Second Argument: Error
  null,
  // Third Argument: Complete
  () => {
    console.log(
      'The third function is called whenever the observable completes.'
    );
  }
);

// ! Ignore first two arguments
example$.subscribe(
  // First Argument: Next
  null,
  // Second Argument: Error
  null,
  // Third Argument: Complete
  () => {
    console.log(
      'The third function is called whenever the observable completes.'
    );
  }
);
