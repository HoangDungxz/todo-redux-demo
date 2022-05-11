const status = {
	TODO: 0,
	PROCESS: 1,
	COMPLETED: 2,
	GET_CLASS(status) {
		switch (status) {
			case this.TODO:
				return 'todo';
			case this.PROCESS:
				return 'process';
			case this.COMPLETED:
				return 'completed';
			default:
				return '';
		}
	},
	GET_DISPLAY_NAME(status) {
		switch (status) {
			case this.TODO:
				return 'Todo';
			case this.PROCESS:
				return 'Processing';
			case this.COMPLETED:
				return 'Completed';
			default:
				return '';
		}
	},
};

export default status;
