import 'bootstrap/js/dist/alert';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);
  const [isNameEmpty, setIsNameEmpty] = useState();
  const [isEmailEmpty, setIsEmailEmpty] = useState();
  const [isMessageEmpty, setIsMessageEmpty] = useState();

  const styles = {
    messageBox: {
      resize: 'none',
    },
  };

  if (state.succeeded) {
    return (
      <div className="alert alert-info" role="alert">
        Message was sent. Thank you.
      </div>
    );
  }

  return (
    // add WHEN I move my cursor out of one of the form fields without entering text
    <section className="container d-flex bg-gray p-5" id="contact">
      <form onSubmit={handleSubmit} className="col-sm-6">
        <section className="m-2">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            name="name"
            id="name"
            className="form-control"
            onBlur={(e) =>
              e.target.value.length > 0
                ? setIsNameEmpty(false)
                : setIsNameEmpty(true)
            }
          />
          {isNameEmpty ? <p>This field cannot be empty</p> : null}
        </section>
        <section className="m-2">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            name="email"
            id="email"
            className="form-control"
            onBlur={(e) =>
              e.target.value.length > 0
                ? setIsEmailEmpty(false)
                : setIsEmailEmpty(true)
            }
          />
          {isEmailEmpty ? <p>This field cannot be empty</p> : null}
          <ValidationError prefix="This" field="email" errors={state.errors} />
        </section>
        <section className="m-2">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            className="form-control"
            rows="10"
            style={styles.messageBox}
            onBlur={(e) =>
              e.target.value.length > 0
                ? setIsMessageEmpty(false)
                : setIsMessageEmpty(true)
            }
          />
          {isMessageEmpty ? <p>This field cannot be empty</p> : null}
        </section>
        <button
          type="submit"
          className="btn text-light bg-secondary m-2"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
