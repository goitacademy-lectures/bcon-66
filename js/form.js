const reviewsForm = document.querySelector('[name="reviews-form"]');
const agreement = document.querySelector('[name="user_agreement"]');

agreement.addEventListener('input', event => {
  let isChecked = Boolean(event.target.checked) ? true : false;
  event.target.setAttribute('value', isChecked);
});

reviewsForm.addEventListener('submit', event => {
  event.preventDefault();
  const { user_name, user_email, user_pass, storage, user_agreement } =
    event.target.elements;
  console.log('User name: ', user_name.value);
  // console.log(user_email.value);
  // console.log(user_pass.value);
  console.log('storage =>', storage.value);

  // console.log('User agreement: ', user_agreement.value);

  // event.target.reset();
});

const valueSpan = document.querySelector('.value');
const inputRange = document.querySelector('[name="user_price"]');

inputRange.addEventListener('input', event => {
  valueSpan.textContent = event.target.value;
});
