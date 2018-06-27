# T4 Template for JSON Sample

## About

This is a simple class library project that demonstrates 
using a T4 template to generate typescript client side classes 
from C# classes.

The generated typescript classes also have knockout observable properties
but this can be removed by changing the T4 template.

This project does not run. It is sample code with a template that builds.

This T4 template solution was made for a project some time ago so there may be better approaches to this problem now. 
Nonetheless, it serves as a demonstration of how T4 templates save you from typing things twice.

## How it works

A custom attribute called 'ScriptDtoAttribute' is used to indicate which classes we want transformed.
It is added to any class we want turned into a Typescript class.

Two sample C# classes are in the project which have this attribute.

./Entities/Person

./Entities/Car

A T4 Template is used to read all types in this assembly which have the 'ScriptDtoAttribute'
and generate them as typescript classes.

./scripts/entities.tt 

## Using It

Build the project. This creates the assembly that will be examined by the T4 Template.
Right click '/scripts/entities.tt' and select 'Run Custom Tool'.

This will generate the file '/scripts/entities.ts' a typescript file with all your classes.

## Changing It

Install a T4 template editor extension to Visual Studio to give 
you syntax highlighting and more. Some possible VS2017 extensions...

- Tangible T4 Editor (Free Edition available)
- T4 Toolbox

The template will run whenever you save it with a change.

## Extending It

Some ideas:
- Get the comments from C# and put them on the typescript classes. Currently uses the SystemComponentModel.DataAnnotations.DisplayAttribute for this.



