function Cell(row, col, cellid, gameBoard) {
	this.row = row;
	this.col = col;
	this.cellid = cellid;
	this.gameBoard = gameBoard;

	this.name = 'R' + this.row + 'C' + this.col;
	this.id = 'r' + this.row + 'c' + this.col;
	this.styleClass = '';
	this.gridSize = 9; // Always 9

	this.cellAnswer = this.gameBoard.gameArray[cellid];
	this.defaultDisplay = (this.gameBoard.defaultDisplay.indexOf(cellid) == -1) ? false : true;
	this.cellValue = (this.defaultDisplay) ? this.cellAnswer : 0;

	this.subgridColor = [2,4,6,8];
	this.hardLeftCell = [4,13,22,31,40,49,58,67,76,7,16,25,34,43,52,61,70,79];
	this.hardTopCell = [28,29,30,31,32,33,34,35,36,55,56,57,58,59,60,61,62,63];

	this.init = function() {
		this.styleClass = this.getStyleClass();
	};

	this.getStyleClass = function() {
		var thisClass = 'normal';

		if (this.col == this.gridSize && this.row == this.gridSize) {
			thisClass = '';

		} else if (this.col == this.gridSize) {
			thisClass = 'row-last';

		} else if (this.row == this.gridSize) {
			thisClass = 'col-last';
		}

		if (this.subgridColor.indexOf(this.getSubGridID()) != -1) {
			thisClass += ' highlighted';
		}

		if (this.hardLeftCell.indexOf(this.cellid) != -1) {
			thisClass += ' hard-left';
		}

		if (this.hardTopCell.indexOf(this.cellid) != -1) {
			thisClass += ' hard-top';
		}

		if (this.defaultDisplay) {
			thisClass += ' bold';
		}

		if (!this.defaultDisplay) {
			thisClass += ' hand';
		}

		return thisClass;
	};

	this.getSubGridID = function() {
		for (var i=0; i <= this.gameBoard.gameGrids.length; i++) {
			if (Array.isArray(this.gameBoard.gameGrids[i]) && this.gameBoard.gameGrids[i].indexOf(this.cellid) != -1) {
				return i;
			}
		}

		return 0;
	};

	this.displayNumber = function() {
		if (this.cellValue != 0 && this.cellValue != '') {
			return this.cellValue;
		}

		return '';
	}

	this.init();
}
