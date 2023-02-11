import 'bootstrap/js/dist/alert';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);
  const styles = {
    messageBox: {
      resize: 'none',
    },
  };

  if (state.succeeded) {
    return <div className="alert alert-info" role="alert">
      Message was sent. Thank you.
    </div>
  }

  return (
    <section className="container d-flex" id="contact">
      <form onSubmit={handleSubmit} className="col-sm-6">
        <section>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input name="name" id="name" className="form-control" required={true} />
        </section>
        <section>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input name="email" id="email" className="form-control" required={true} />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </section>
        <section>
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="10"
            style={styles.messageBox}
            required={true}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </section>
        <button
          type="submit"
          className="btn text-light bg-secondary"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
