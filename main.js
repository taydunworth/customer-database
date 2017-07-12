console.log(customers)

const directoryList = document.querySelector('ul.directory-list')

function getDirectory() {
  for (var i = 0; i < 12; i++) {
    const customer = customers.results[i]
    const customerBox = document.createElement('li')
    const picture = document.createElement ('img')
    const name = document.createElement('p')
    const email = document.createElement('p')
    const cell = document.createElement('p')
    const addressOne = document.createElement('p')
    const addressTwo = document.createElement('p')
    const ssn = document.createElement('p')

    picture.src = `${customer.picture.large}`
    name.textContent = `${customer.name.first} ${customer.name.last}`
    email.textContent = customer.email
    addressOne.textContent = `${customer.location.street}`
    addressTwo.textContent = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    cell.textContent = customer.cell
    ssn.textContent = customer.id.value

    customerBox.classList.add('customerBox')
    name.classList.add('name')
    email.classList.add('email')
    addressOne.classList.add('address')
    addressTwo.classList.add('address')
    cell.classList.add('cell')
    ssn.classList.add('ssn')

    directoryList.appendChild(customerBox)
    customerBox.appendChild(picture)
    customerBox.appendChild(name)
    customerBox.appendChild(email)
    customerBox.appendChild(addressOne)
    customerBox.appendChild(addressTwo)
    customerBox.appendChild(cell)
    customerBox.appendChild(ssn)

    ssn.addEventListener('mouseover', function(){
      if (ssn.className != "no-blur") {
      ssn.className = " no-blur"
      }
    })

    ssn.addEventListener('mouseout', function(){
      if (ssn.className != "ssn") {
      ssn.className = "ssn"
      }
    })
  }
}

getDirectory()
