function AccountValidation(props) {
    const contact = props.contact;
   
    const handleAccountValidationNext = () => {
        console.log('Account Validation Next Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Account State Object
        let selected_account = false;
        let selected_account_index;
        props.match_list.map((item, index) =>{
          if (item.selected){
            selected_account = true;
            selected_account_index = index;
          }
        });
        if(selected_account){
          props.account_update(props.match_list[selected_account_index]);
          props.navigate("Lead Entry");
        }
        else{
          alert("Select an Account before navigating to the next page.");
        }
        
      };

    const handleAccountValidationPrevious = () => {
        console.log('Contact Validation Previous Button clicked!');
        // Perform other actions here
        props.navigate("Account Entry");
      };

      const updateMatchList = (index, selected) => {
        let new_match_list = props.match_list.map((item,i) =>{
          if(selected){
            if(i !== index){
              item.selected = false;
            }
          }
          if (i == index){
            item.selected = selected;
          }
          return item;
        });
        //new_match_list[index].selected = selected;
        console.log(new_match_list);
        props.match_list_update(new_match_list);

      };
      

    return (
      <div className="AccountValidation">
        
          <div className = "FormHeader">
            Select an Account
          </div>
          {console.log("Account Match List:")}
          {console.log(props.match_list)}
          {props.match_list.map((item, index) => (
            <div  className="ValidationWrapper" key={"AccountMatch" + index}>
              <div><input type="checkbox" checked={item.selected} onChange={() => updateMatchList(index, !item.selected)}/></div>
              <div>
                <div>{item.id} | {item.name} | {item.phone}</div>
                <div>{item.address}</div>
              <div>{item.city}, {item.state} {item.zip}</div>
              </div>
            </div>     
      ))}
          <div className="NavigationButtons">
            <button onClick={handleAccountValidationPrevious}>Previous</button>
            <button onClick={handleAccountValidationNext}>Next</button>
          </div>
          
      </div>
      
    );
  }
  
  export default AccountValidation;