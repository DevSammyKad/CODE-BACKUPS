'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import { hospitalSchema } from '@/lib/schemas';

const HospitalForm = () => {
  const form = useForm({
    resolver: zodResolver(hospitalSchema),
    defaultValues: {
      hospitalName: '',
      hospitalLocation: '',
      hospitalDescription: '',
      totalRooms: 0,
      roomsCategory: '',
      managerName: '',
      contactDetails: '',
      cancellationPolicy: '',
      termsAndConditions: '',
    },
  });

  const onSubmit = () => {
    console.log('Form Submitted:');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full "
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Get Info About your Hospital</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 w-full">
            <FormField
              control={form.control}
              name="hospitalName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Hospital Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hospitalLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital Location</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Hospital Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hospitalDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hospital Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Hospital Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rooms Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <FormField
              control={form.control}
              name="totalRooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total No. of Rooms</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Rooms" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="roomsCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rooms Category</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Rooms Category"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hospital Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <FormField
              control={form.control}
              name="managerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local Manager Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Manager Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Details</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="91......." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cancellationPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cancellation Policy</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Cancellation Policy" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Terms & Conditions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Terms & Conditions" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full">
          Update
        </Button>
      </form>
    </Form>
  );
};

export default HospitalForm;
