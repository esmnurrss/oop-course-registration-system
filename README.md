# Course Registration System

A simple course registration system developed using TypeScript and Object-Oriented Programming (OOP) principles.

## About the Project

This project simulates a university course registration system. Students can register for courses, cancel their registrations, and check the courses they are enrolled in.

The system also checks course capacity, prevents duplicate registrations, and applies different registration policies.

## Features

- Create students and courses
- Create course offerings with limited capacity
- Register students for courses
- Cancel registrations
- Prevent duplicate registrations
- Check remaining seats
- Apply standard and restricted registration policies
- Check maximum allowed credits

## Technologies

- TypeScript
- Object-Oriented Programming (OOP)

## OOP Concepts Used

- **Classes and Objects:** Used to represent students, courses, and enrollments.
- **Encapsulation:** Used to organize and protect class data.
- **Inheritance:** Registration policies share a common base class.
- **Abstraction:** Abstract classes and interfaces define common behavior.
- **Polymorphism:** Different registration policies implement the same method in different ways.

## Project Structure

The project includes the following main classes and interfaces:

- `Student`
- `Course`
- `Enrollment`
- `CourseOffering`
- `RegistrationService`
- `RegistrationPolicy`
- `BaseRegistrationPolicy`
- `StandardRegistrationPolicy`
- `RestrictedRegistrationPolicy`

## Purpose

The purpose of this project is to practice TypeScript and understand how object-oriented programming concepts can be used in a real-world example.

## Author

Created as part of an Object-Oriented Programming course assignment.
