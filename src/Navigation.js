import './navigation.css';


function Navigation(props) {
  const page = props.page;
    const handleClick = () => {
      console.log('Button clicked!');
      // Perform other actions here
    };

    const handleContactEntryClick = () => {
      console.log('Contact Entry Link clicked!');
      // Perform other actions here
      props.navigate("Contact Entry");
    };

    const handleContactValidationClick = () => {
      console.log('Contact Validation Link clicked!');
      // Perform other actions here
      props.navigate("Contact Validation");
    };

    const handleAccountEntryClick = () => {
      console.log('AccountEntry Link clicked!');
      // Perform other actions here
      props.navigate("Account Entry");
    };

    const handleAccountValidationClick = () => {
      console.log('Account Validation Link clicked!');
      // Perform other actions here
      props.navigate("Account Validation");
    };

    const handleLeadEntryClick = () => {
      console.log('Lead Entry Link clicked!');
      // Perform other actions here
      props.navigate("Lead Entry");
    };

    const handleLeadReviewClick = () => {
      console.log('Lead Review Link clicked!');
      // Perform other actions here
      props.navigate("Lead Review");
    };
  
    return (
      <div className="navigation_wrapper">
        <div className="navigation_item">
          <span className={page=="Contact Entry" ? "current_page" : "non_current_page"} onClick={handleContactEntryClick}>
            Contact Entry
          </span>
        </div>
        <div className="navigation_item"> 
          <span className={page=="Contact Validation" ? "current_page" : "non_current_page"}onClick={handleContactValidationClick}>
            Contact Validation
          </span>
        </div>
        <div className="navigation_item">
        <span className={page=="Account Entry" ? "current_page" : "non_current_page"}onClick={handleAccountEntryClick}>
            Account Entry
          </span>
        </div>
        <div className="navigation_item">
        <span className={page=="Account Validation" ? "current_page" : "non_current_page"}onClick={handleAccountValidationClick}>
            Account Validation
          </span>
        </div>

        <div className="navigation_item">
        <span className={page=="Lead Entry" ? "current_page" : "non_current_page"}onClick={handleLeadEntryClick}>
            Lead Entry
          </span>
        </div>

        <div className="navigation_item">
        <span className={page=="Lead Review" ? "current_page" : "non_current_page"}onClick={handleLeadReviewClick}>
            Review Lead Details
          </span>
        </div>
      
    </div>
    );
  }

  export default Navigation;