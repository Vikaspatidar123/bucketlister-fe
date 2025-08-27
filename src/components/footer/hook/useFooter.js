"use client";
import { useState } from 'react';

export const useFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    comment: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    // Clear any previous submit error when trying again
    if (errors.submit) {
      setErrors(prev => ({ ...prev, submit: '' }));
    }

    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append('name', formData.name);
      body.append('contactNumber', formData.contactNumber);
      body.append('comment', formData.comment || '');
      body.append('access_key', '00176335-a9f3-421c-b7cd-b53b561f0526');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body
      });

      const data = await response.json();

      if (data && data.success) {
        setFormData({
          name: '',
          contactNumber: '',
          comment: ''
        });
        setErrors({});
        return true;
      } else {
        const message = data && data.message ? data.message : 'Submission failed';
        setErrors(prev => ({ ...prev, submit: message }));
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({ ...prev, submit: 'Network error during submission' }));
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      contactNumber: '',
      comment: ''
    });
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};
