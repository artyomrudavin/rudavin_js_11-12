$(function() {

	var html = $('#bio').html();

	var data = {

		name: 'РУДАВИН АРТЕМ АЛЕКСАНДРОВИЧ',
		proff: 'Менеджер по продажам, маркетолог и просто нервный парень',
		wanted: 'Хочу учить фронтенд, потому что:',
		want1: 'Хочется заниматься тем, что нравится!',
		want2: 'Платят нормально, но не охотно)',
		want3: '70% времени online, хорошо бы это использовать',
		phoneTitle: 'Мой контактный телефон:',
		phone: '+80663148548',
		fbTitle: 'Мой профиль Facebook:',
		fbHref: '"https://www.facebook.com/artem.rudawin"',
		fb: 'Рудавин Артем',
		feedbackTitle: 'Мой фидбек:',
		feedback: 'Если нужно, могу построить вам забор (просто хотел чтобы вы знали)'

	}

	var content = tmpl(html, data);

	$('.tmpl').append(content);

});