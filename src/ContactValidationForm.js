function ContactValidation(props) {
    const contact = props.contact;
   
    const handleContactValidationNext = () => {
        console.log('Contact Validation Next Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Contact State Object
        //Check for a selected Contact
        let selected_contact = false;
        let selected_contact_index;
        props.match_list.map((item, index) =>{
          if (item.selected){
            selected_contact = true;
            selected_contact_index = index;
          }
        });
        if(selected_contact){
          props.contact_update(props.match_list[selected_contact_index]);
          props.navigate("Account Entry");
        }
        else{
          alert("Select a Contact before navigating to the next page.");
        }
        
      };

    const handleContactValidationPrevious = () => {
        console.log('Contact Validation Previous Button clicked!');
        // Perform other actions here
        props.navigate("Contact Entry");
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
      <div className="ContactValidation">
        
          <div className = "FormHeader">
            Select a Contact
          </div>
          
          {console.log("Contact Match List:")}
          {console.log(props.match_list)}
          {props.match_list.map((item, index) => (
            <div className="ValidationWrapper" key={"ContactMatch" + index}>
              <div><input type="checkbox" checked={item.selected} onChange={() => updateMatchList(index, !item.selected)}/></div>
              <div>
                <div>{item.id} | {item.first_name} {item.last_name} | {item.email} | {item.phone}</div>
                <div>{item.address}</div>
                <div>{item.city}, {item.state} {item.zip}</div>
              </div>
            </div>
        
        
      ))}
          <div className="NavigationButtons">
            <button onClick={handleContactValidationPrevious}>Previous</button>
            <button onClick={handleContactValidationNext}>Next</button>
          </div>
          
          
      </div>
      
    );
  }
  
  export default ContactValidation;