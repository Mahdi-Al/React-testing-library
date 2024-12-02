import "./Application.css";

export const Application = () => {
  return (
    <div className="application-container">
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Tejveer"
            onChange={() => {}}
          />
        </div>
        <div className="form-control">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div className="form-control">
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div className="form-control agree">
          <label htmlFor="agree">I agree to the terms and conditions</label>
          <input type="checkbox" id="terms agree" />
        </div>
        <button disabled={false}>Submit</button>
      </form>
    </div>
  );
};
