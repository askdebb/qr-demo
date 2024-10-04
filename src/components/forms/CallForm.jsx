// import React from 'react';

const CallForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CallForm;
