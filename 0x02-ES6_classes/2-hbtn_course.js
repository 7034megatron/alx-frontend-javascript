class HolbertonCourse {
  constructor(name, length, students) {
    // Type checking for attributes
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }

    // Store attributes in underscore versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters and setters with type checking
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    // Return a copy of the students array to prevent modification
    return [...this._students];
  }
}
