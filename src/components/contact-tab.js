function createInputForm(type, name) {
  const inputDiv = document.createElement('div');
  inputDiv.classList = 'form-group w-75';
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('placeholder', name);
  input.setAttribute('name', name);
  input.setAttribute('required', true);
  input.classList = 'form-control';
  inputDiv.appendChild(input);
  return inputDiv;
}

const contactTab = document.createElement('section');
contactTab.classList = 'resume-section p-4 p-lg-5 text-center';
const container = document.createElement('div');
container.classList = 'my-auto';
contactTab.appendChild(container);

const title = document.createElement('h2');
title.classList = 'mb-4';
title.appendChild(document.createTextNode('Contact Information'));

const instructions = document.createElement('p');
instructions.appendChild(document.createTextNode('Leave your message below and I will be back to you as soon as possible.'));

const form = document.createElement('form');
form.classList = 'contact-form d-flex flex-column align-items-center';

form.appendChild(createInputForm('text', 'name'));
form.appendChild(createInputForm('email', 'email'));
form.appendChild(createInputForm('text', 'message'));

const submitButton = document.createElement('button');
submitButton.classList = 'btn btn-submit btn-warning w-75';
submitButton.innerHTML = 'Submit';
form.appendChild(submitButton);

container.appendChild(title);
container.appendChild(instructions);
container.appendChild(form);

export default contactTab;