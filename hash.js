class HashMap {
  constructor(initialCapacity = 4, loadFactor = 1) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  _hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    console.log(`Setting key: ${key}, value: ${value}`); // Debugging line
    let hashed = this._hash(key);
    let index = hashed % this.buckets.length;
    this._check(index);
    if (value === undefined) {
      throw new Error("Cannot set undefined value");
    }
    let bucket = this.buckets[index];
    let exist = bucket.find((pair) => pair[0] === key);

    if (exist) {
      exist[1] = value;
    } else {
      bucket.push([key, value]);
      this.size++;

      if (this.size / this.buckets.length > this.loadFactor) {
        this._resize();
        console.log("resizing");
      }
    }
  }

  get(key) {
    let hashed = this._hash(key);
    let index = hashed % this.buckets.length;
    this._check(index);
    let bucket = this.buckets[index];
    let exist = bucket.find((pair) => pair[0] === key);

    if (exist) {
      return exist[1];
    } else {
      return null;
    }
  }

  has(key) {
    let hashed = this._hash(key);
    let index = hashed % this.buckets.length;
    this._check(index);
    let bucket = this.buckets[index];
    let exist = bucket.find((pair) => pair[0] === key);
    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    let hashed = this._hash(key);
    let index = hashed % this.buckets.length;
    this._check(index);
    let bucket = this.buckets[index];
    let exist = bucket.find((pair) => pair[0] === key);
    if (exist) {
      let removeIndex = bucket.indexOf(exist);
      bucket.splice(removeIndex, 1);
    } else {
      return null;
    }
  }

  length() {
    return this.size;
  }

  bucketsCount() {
    return this.buckets.length;
  }

  clear() {
    let sizeArray = this.buckets.length;
    let newBuckets = new Array(sizeArray).fill(null).map(() => []);
    this.buckets = newBuckets;
  }

  keys() {
    let me = 0;
    for (
      let arrayIndex = 0;
      arrayIndex < this.buckets.length - 1;
      arrayIndex++
    ) {
      const bucket = this.buckets[arrayIndex];
      this._check(arrayIndex);
      console.log(arrayIndex);
      for (const [key] of bucket) {
        if (key !== undefined) {
          console.log(key);
          me++;
          console.log(me);
        }
      }
    }
  }

  values() {
    for (let arrayIndex = 0; arrayIndex < this.buckets.length; arrayIndex++) {
      this.buckets[arrayIndex].forEach((element) => console.log(element[1]));
    }
  }

  entries() {
    for (let arrayIndex = 0; arrayIndex < this.buckets.length; arrayIndex++) {
      this.buckets[arrayIndex].forEach((element) => console.log(element));
    }
  }

  _resize() {
    let newBucket = new Array(this.buckets.length * 2).fill(null).map(() => []);
    for (let bucket of this.buckets) {
      for (let [key, value] of bucket) {
        const index = this._hash(key) % newBucket.length;
        newBucket[index].push([key, value]);
      }
    }
    this.buckets = newBucket;
  }

  _check(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      console.log("pass");
    }
  }
}

module.exports = HashMap;
