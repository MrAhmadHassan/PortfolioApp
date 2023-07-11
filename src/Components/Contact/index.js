import './style.css';
const Contact = () => {
  return (
    <>
      <div className="container">
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input className='btn-primary' type="submit" value="Send Message" />
        </form>
      </div>
    </>
  );
};

export default Contact;
