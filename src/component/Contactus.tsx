/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
console.log(reset)
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    console.log(data)
  }
  
  return (
    <div className="bg-gradient-to-r from-[#10131a] to-[#0f212c] min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gradient-to-r from-[#10131a] to-[#0f212c] rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Information */}
          <div className="md:w-1/3 p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2EB2D3]">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#2EB2D3]" />
                <span className="text-[#EFF0F2]">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#2EB2D3]" />
                <span className="text-[#EFF0F2]">toney010319@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#2EB2D3]" />
                <span className="text-[#EFF0F2]">123 Main St, City, Country</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2EB2D3]">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                  className="bg-transparent border-[rgba(46,178,211,0.45)] text-[#EFF0F2]"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>
              <div>
                <Input
                  placeholder="Your Email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="bg-transparent border-[rgba(46,178,211,0.45)] text-[#EFF0F2]"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  {...register('message', { required: 'Message is required' })}
                  className="bg-transparent border-[rgba(46,178,211,0.45)] text-[#EFF0F2]"
                  rows={4}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>
              <Button type="submit" className="bg-[#2EB2D3] text-white hover:bg-[#2095B3] transition-colors" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {submitMessage && <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{submitMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;