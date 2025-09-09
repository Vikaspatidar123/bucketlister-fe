"use client";
import { useState } from 'react';
import { crmApi } from '@/utils/crmApi';

export const useFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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

  const submitToEmail = async () => {
    try {
      const body = new FormData();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('contactNumber', formData.contactNumber);
      body.append('comment', formData.comment || '');
      body.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body
      });

      const data = await response.json();
      return data && data.success;
    } catch (error) {
      console.error('Email submission error:', error);
      return false;
    }
  };

  const submitToCRM = async () => {
    try {
      const { firstName, lastName } = crmApi.parseFullName(formData.name);
      const formattedPhone = crmApi.formatPhoneNumber(formData.contactNumber);
      
      const leadData = {
        firstName,
        lastName,
        email: formData.email,
        phone: formattedPhone,
        source: 'Website',
        notes: `Comment: ${formData.comment || 'None'}`
      };

      const result = await crmApi.createLead(leadData);
      return result.success;
    } catch (error) {
      console.error('CRM submission error:', error);
      return false;
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
      // Submit to email first, then CRM
      const emailResult = await submitToEmail();
      const crmResult = await submitToCRM();

      // Consider successful if either submission works
      if (crmResult || emailResult) {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          comment: ''
        });
        setErrors({});
        
        // Log results for debugging
        console.log('CRM Result:', crmResult);
        console.log('Email Result:', emailResult);
        
        return true;
      } else {
        setErrors(prev => ({ 
          ...prev, 
          submit: 'Failed to submit form. Please try again or contact us directly.' 
        }));
        return false;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors(prev => ({ 
        ...prev, 
        submit: 'Network error during submission. Please try again.' 
      }));
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
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
