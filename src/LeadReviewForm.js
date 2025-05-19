import React from "react";
import { useState } from "react";


function LeadReview(props) {
    const contact = props.contact;
    const [show_json, set_show_json] = useState(false);
    //TODO: if there is a selected contact and account match, set the value as the contact and account object to be sent to downstream system
    const final_object = {};
    final_object.contact = props.contact;
    final_object.account = props.account;
    final_object.lead = props.lead;
   
    const handleLeadReviewPrevious = () => {
        console.log('Lead Review Previous Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Contact State Object
        props.navigate("Lead Entry");
      };

    const handleLeadReviewSubmit = () => {
        console.log('Lead Review Submit Button clicked!');
        // Perform other actions here
        // TODO: Write Lead Submission message to console
        // TODO: Reset object and navigate back to start page
        //props.navigate("Contact Entry");        
        console.log(JSON.stringify(final_object, null,2));
        set_show_json(current => !current);
        console.log(show_json);
      };

      const contactCard = () =>{
        let contact_card_object = {};
        if (props.contact_match_list.length < 1){
          contact_card_object = props.contact;
        }
        else{
          props.contact_match_list.map((item,i) => {
            if(item.selected){
              contact_card_object = item;
            }
          });
        }

        return(
          <>
            <div className="FormHeader">Contact</div>
            <div  className="LeadValidationWrapper">
              <div>{contact_card_object.first_name} {contact_card_object.last_name}</div>
              {contact_card_object.address && contact_card_object.city && contact_card_object.state && contact_card_object.zip ? 
                <div>
                  <div>{contact_card_object.address}</div>
                  <div>{contact_card_object.city}, {contact_card_object.state}</div>
                  <div>{contact_card_object.zip}</div>
                </div> : ""}
              <div>{contact_card_object.phone}</div>
              <div>{contact_card_object.email}</div>
            </div>
          </>
        );

      };

      const accountCard = () =>{
        let account_card_object = {};
        if (props.account_match_list.length < 1){
          account_card_object = props.account;
        }
        else{
          props.account_match_list.map((item,i) => {
            if(item.selected){
              account_card_object = item;
            }
          });
        }

        return(
          <>
            <div className="FormHeader">Account</div>
            <div  className="LeadValidationWrapper">
              <div>{account_card_object.name}</div>
                {account_card_object.address && account_card_object.city && account_card_object.state && account_card_object.zip ? 
              <div>
               <div>{account_card_object.address}</div>
                <div>{account_card_object.city}, {account_card_object.state}</div>
                <div>{account_card_object.zip}</div>
              </div> : ""}
              <div>{account_card_object.phone}</div>
              <div>{account_card_object.email}</div>
            </div>
            
          </>
        );

      };

      const leadCard = () =>{
        let lead_card_object = props.lead;

        return(
          <>
            <div className="FormHeader">Lead</div>
            <div  className="LeadValidationWrapper">
            <div>{lead_card_object.name}</div>
            <div>
              <div>Arrival Date: {lead_card_object.arrival_date}</div>
              <div>Departure Date: {lead_card_object.departure_date}</div>
              <div>Peak Attendees: {lead_card_object.peak_attendees}</div>
              <div>Peak Rooms: {lead_card_object.peak_rooms}</div>
              <div>Property Code: {lead_card_object.property_code}</div>
            </div>
            </div>
            
            <div className="FormHeader">Function Agendas</div>
            {lead_card_object.function_agendas.map((item, index) =>{
              return(
              <div className="LeadValidationWrapper" key={"FunctionAgenda" + index}>
                <div>Date: {item.date}</div>
                <div>Function Type: {item.type}</div>
                <div>Setup Style: {item.setup_style}</div>
                <div>Start Time: {item.start_time}</div>
                <div>End Time: {item.end_time}</div>
                <div>Number of Attendees: {item.expected_attendees}</div>
              </div>
              )
            })}
            <div className="FormHeader">Room Blocks</div>
            {lead_card_object.room_blocks.map((item, index) =>{
              return(
                <div className="LeadValidationWrapper" key={"RoomBlock" + index}>
                    <div>Date: {item.date}</div>
                    <div>Room Type: {item.room_type}</div>
                    <div>Number of Rooms: {item.number_of_rooms}</div>
                    <div>Number of Days: {item.number_of_days}</div>                    
                </div>
              )
            })}
          </>
        );

      };


      

    return (
      <div className="LeadReview">
        <div className="LeadReviewData">
          {contactCard()} 
          {accountCard()}
          {leadCard()}
          <div className="NavigationButtons">
          <button onClick={handleLeadReviewPrevious}>Previous</button>
          <button onClick={handleLeadReviewSubmit}>Submit</button>
          </div>
        </div>
        <div className="LeadReviewJSON">
          {show_json ?
            <div>
              {JSON.stringify(final_object, null,2)}
            </div> : ""
          }
        </div>
       


          
      </div>
      
    );
  }
  
  export default LeadReview;