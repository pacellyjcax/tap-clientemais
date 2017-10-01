export class User {
	
	constructor(
		public	userId: number = -1,
		public	firstName: string = '',
		public	lastName: string = '',
		public	dateOfBirth: string = "",
		public	address: string = '',
		public	dateOfHire: string = ""
	) {
		
	}

	public get age(): number {
		return User.getYearsDifference(
			new Date(this.dateOfBirth).getTime(),
			Date.now()
		);
	}

	public get experience(): number {
		return User.getYearsDifference(
			new Date(this.dateOfHire).getTime(),
			Date.now()
		);
	}

	public static build = (data: any) => {
		return new User(
			data.userId,
			data.firstName,
			data.lastName,
			data.dateOfBirth,
			data.address,
			data.dateOfHire
		);
	}

	private static getYearsDifference(fromMilliseconds: number, toMilliseconds: number) {
		let millisecondsDifference = toMilliseconds - fromMilliseconds;
		let days = millisecondsDifference / 1000 / 60 / 60 / 24;
		days = Math.floor(days);
		let i = 0;
		while (days > 0) {
			i++;
			days = days - 364;
			if (i % 4 == 0) {
				days = days - 1;
			}
		}

		return (--i < 0) ? 0 : i;
	}

}