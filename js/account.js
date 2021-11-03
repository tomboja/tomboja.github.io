(function(){
  window.onload = () => {
    const accountName = document.querySelector('#name')
    const deposite = document.querySelector('#deposite')
    const txtArea = document.querySelector('#accounts')
    const btn = document.querySelector('#newAccount')

    function Account(accountName, deposite) {
      return {
        accountName, deposite
      }
    }

    const accountList = [] // List of accounts

    btn.onclick = () => {
      let account = new Account(accountName.value, deposite.value)
      accountList.push(account) // Add accounts to account list

      let accountDetail = ''
      for (const ac of accountList) {
        accountDetail += `Account Name: ${ac.accountName}, Balance: ${ac.deposite} \n`
      }
      txtArea.innerHTML = accountDetail
      accountName.value = ''
      deposite.value = ''
    }
  }
})()
