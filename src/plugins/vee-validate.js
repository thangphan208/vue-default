import {configure, defineRule} from 'vee-validate';

configure({
    validateOnInput: true,
});


defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }

    return true;
});

defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }

    const reg = new RegExp(/^\S+@\S+$/);
    // Check if email
    if (!reg.test(value)) {
        return 'This field must be a valid email';
    }

    return true;
});

defineRule('minLength', (value, [min, max]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
        return `This field must be greater than ${min}`;
    }

    if (numericValue > max) {
        return `This field must be less than ${max}`;
    }

    return true;
});

defineRule('min', (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
        return true;
    }

    if (value.length < limit) {
        return `This field must be at least ${limit} characters`;
    }

    return true;
});