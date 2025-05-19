function AccountEntry(props) {
  const LocalAccountList = [
    {
      name: 'Lowes',
      phone: '555-111-2222',
      address: '123 Main Street',
      city: 'New York',
      state: 'New York',
      zip: '10004',
      id: '1-1100'
    },
    {
      name: 'Lowes',
      phone: '555-111-2222',
      address: '123 Water Street',
      city: 'Jersery City',
      state: 'New Jersey',
      zip: '07030',
      id: '1-1200'
    },
    {
      name: 'Home Depot',
      phone: '555-222-3333',
      address: '123 7th Avenue',
      city: 'New York',
      state: 'New York',
      zip: '10004',
      id: '1-1300'
    },
  ]
  const handleAccountEntryPrevious = () => {
    console.log('Account Entry Previous Button clicked!');
    // Perform other actions here
    //TODO: Add user selection to Contact State Object
    props.navigate("Contact Validation");
  };

const handleAccountEntryNext = () => {
    console.log('Account Entry Next Button clicked!');
    // Perform other actions here

    console.log(props.account);
    console.log(LocalAccountList.length);
    console.log(LocalAccountList);
    const accountMatchList = [];

    for (var i = 0; i < LocalAccountList.length; i++) {
        console.log(i); // index
        console.log(LocalAccountList[i].firstName);
        console.log(props.account.name);
        if (LocalAccountList[i].name === props.account.name &&
            LocalAccountList[i].phone === props.account.phone
            ){
            console.log("Account Match!");
            LocalAccountList[i].selected = false;
            accountMatchList.push(LocalAccountList[i]);
            console.log("Account Match List");
            console.log(accountMatchList);
        } // value
        else{
            console.log("No Account Match!");
        }
    }
    let match_count = accountMatchList.length;
    if (match_count < 1){
        //No Matches so Navigate to Lead Entry
        props.match_list_update(accountMatchList);
        props.navigate("Lead Entry");
    }
    else if (match_count == 1){
        //One match, update account data and navigate to Lead Entry
        props.account_update(accountMatchList[0]);
        props.match_list_update(accountMatchList);
        props.navigate("Lead Entry");
    }
    else{
        props.match_list_update(accountMatchList);
        props.navigate("Account Validation");
    }

  };

  const handleAccountDataEntry = (e) => {
    console.log(e.target.title);
    console.log(e.target.value);
    let new_account = props.account;
    switch(e.target.title){
        case "Name":
            new_account.name = e.target.value;
            break;
        case "Main Phone Number":
            new_account.phone = e.target.value;
            break;

        default:
            console.log("Error updating account data");
            break;
    };

    console.log(new_account);
    props.account_update(new_account);
    // Perform other actions here
  };

    return (
      <div className="AccountEntry">
        
          <div className="FormHeader">
            Enter Account Details
          </div>
          <div>
          <label className="FormLabel" for="Name">Name</label>
            <input type="text" placeholder="Name" title = "Name" id="Name" defaultValue={props.account.name} onChange={handleAccountDataEntry}/>
          </div>
          <div>
            <label className="FormLabel" for="Main Phone Number">Main Phone Number</label>
            <input type="text" placeholder="Main Phone Number" title = "Main Phone Number" id="Main Phone Number" defaultValue={props.account.phone} onChange={handleAccountDataEntry}/>
          </div>
          <div className="NavigationButtons">
            <button onClick={handleAccountEntryPrevious}>Previous</button>
            <button onClick={handleAccountEntryNext}>Next</button>
          </div>
          
          
      </div>
      
    );
  }
  
  export default AccountEntry;