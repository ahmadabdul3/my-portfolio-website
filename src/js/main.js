$(document).ready(function() {
	$('.info-summary-box').on('click', function() {
		handleInfoSummaryBoxClick($(this));
	});
	$('#modal-box-bg').on('click', function() {
		hideModal();
	});
	$('.skl-lvl-txt-box').on('mouseover', function() {
		handleSkillLevelTextBoxMouseEvent($(this), 0.1);
	});
	$('.skl-lvl-txt-box').on('mouseleave', function() {
		handleSkillLevelTextBoxMouseEvent($(this), 1);
	});


});

function handleSkillLevelTextBoxMouseEvent(self, animationProperty) {
	var classes = getSkillLevelClasses();
	var skillLevelClass = matchClassAndReturn($(self).attr('class'), classes);
	if (skillLevelClass !== 'null') {
		for (var i = 0; i < 3; i++) {
			var tempClass = classes[i];
			if (skillLevelClass !== tempClass) {
				$('.' + tempClass).animate({opacity: animationProperty}, 500);
			}
		}
	}
}

function handleInfoSummaryBoxClick(self) {
	showModal();
}
function showModal() {
	$('#modal-bg').fadeIn();
	$('#modal-box-bg').fadeIn();
}
function hideModal() {
	$('#modal-bg').fadeOut();
	$('#modal-box-bg').fadeOut();
}
function getSkillLevelClasses() {
	return ['skl-lvl-beg', 'skl-lvl-intr', 'skl-lvl-adv'];
}
function matchClassAndReturn(elementClass, classes) {
	var length = classes.length;
	for(var i = 0; i < length; i++) {
		if (elementClass.indexOf(classes[i]) > -1) {
			return classes[i];
		}
	}
	return getNull();
}
function getNull() {
	return 'null';
}