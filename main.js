
// I'm creating an object to store the pacakge volumes. There are many reasons behind this decision that can be later explained.
const packageBounds = {
  small: 200 * 300 * 150,
  medium: 300 * 400 * 200,
  large: 400 * 600 * 250
}

// Main Class
class Packages {

  constructor(len, bre, hei, cost, type) {
    this.len= len
    this.bre = bre
    this.hei = hei
    this.cost = cost
    this.type = type
  }

  static instanceOf(len, bre, hei, weight, type){

    const vol = len*bre*hei

    if ( weight < 0  && weight >= 25 ) {
      console.log('the weight is not in range')
    }

    else if (vol < 0) {
      console.log('vol is lower than 0')
    }

    else if (vol <= packageBounds.small) {
      return new SmallPackage(len, bre, hei, type)
    }

    else if (vol <= packageBounds.medium) {
      return new MediumPackage(len, bre, hei, type)
    }

    else if (vol <= packageBounds.large) {
      return new LargePackage(len, bre, hei, type)
    }

    else {
      console.log('other conditions')
    }

  }

}

class SmallPackage extends Packages {
  constructor(len, bre, hei) {
    super(len, bre, hei, 5.00, 'Small')
  }
}

class MediumPackage extends Packages {
  constructor(len, bre, hei) {
    super(len, bre, hei, 7.5, 'Medium')
  }
}

class LargePackage extends Packages {
  constructor(len, bre, hei) {
    super(len, bre, hei, 8.5, 'Large')
  }
}


// Main function

function ParsetheParcel() {

    Length = parseInt(prompt("Please enter the Package's Length:", "e.g: 300mm"))
    Breadth = parseInt(prompt("Please enter the Package's Breadth:", "e.g: 450mm"))
    Height = parseInt(prompt("Please enter the Package's Height:", "e.g: 120mm"))
    Weight = parseInt(prompt("Please enter the Package's Weight:", "e.g: 15kg"))

    let mypackage = Packages.instanceOf(Length,Breadth,Height,Weight)
    if (mypackage) console.log(mypackage.type)
    else document.getElementById("error").innerHTML = "Couldn't create a valid package"

    document.getElementById("package").innerHTML = mypackage.type
    document.getElementById("price").innerHTML = mypackage.cost

  }






