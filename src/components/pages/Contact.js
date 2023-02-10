import { useState } from 'react';

function Contact() {
  const styles = {
    messageBox: {
      resize: 'none',
    },
  };

  return (
    <section className="container d-flex just" id="contact">
      <form
        className="col-sm-6"
        action="https://formspree.io/f/mvonkbog"
        method="POST"
      >
        <section>
          <label for="name" className="form-label">
            Name:
          </label>
          <input name="name" id="name" className="form-control" />
        </section>
        <section>
          <label for="email" className="form-label">
            Email:
          </label>
          <input name="email" id="email" className="form-control" />
        </section>
        <section>
          <label for="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="10"
            style={styles.messageBox}
          />
        </section>
        <button type="submit" className="btn text-light bg-secondary">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
