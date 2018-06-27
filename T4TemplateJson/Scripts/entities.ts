﻿

/**
* Autogenerated file at 27/06/2018 10:35:10 AM
*/
 
module models {

	export class ModelHelpers{

	    /** 
		 * Loads dates when they are supplied in old ASXM format of /Date(123456798)/
		 * Change if using normal json date formats.
		 */
		public static loadDate(value: any):Date{
			if(value == null || value == undefined){
				return null;
			}else if(value instanceof Date){
				return value;
			}else if(typeof value == 'string'){
				return new Date(value);
			}
		}
	}

	export class Car{

	/**
	* 
	*/
	public make: KnockoutObservable<string> = ko.observable(null);

			/**
	* 
	*/
	public model: KnockoutObservable<string> = ko.observable(null);

		
	/**
	* Loads the object from a dto
	*/
	public load(data: any): Car
	{
		if(data == null) return null;
		this.make(data.Make)
		this.model(data.Model)
		return this;
	}

	/**
	* Save the object to a DTO
	*/
	public save(): any{
		return {
				Make : this.make(),
				Model : this.model(),
				};
	}

	}//end class

	export class Person{

	/**
	* 
	*/
	public firstName: KnockoutObservable<string> = ko.observable(null);

			/**
	* 
	*/
	public lastName: KnockoutObservable<string> = ko.observable(null);

			/**
	* 
	*/
	public age: KnockoutObservable<number> = ko.observable(null);

		
	/**
	* Loads the object from a dto
	*/
	public load(data: any): Person
	{
		if(data == null) return null;
		this.firstName(data.FirstName)
		this.lastName(data.LastName)
		this.age(data.Age)
		return this;
	}

	/**
	* Save the object to a DTO
	*/
	public save(): any{
		return {
				FirstName : this.firstName(),
				LastName : this.lastName(),
				Age : this.age(),
				};
	}

	}//end class





}//end module
