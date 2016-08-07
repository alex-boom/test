import HP from './helpers';

(function($) {

		//Плагин валидации инпутов в форме Validation описание видео http://2develop.ru/jquery/proverka-poley-s-pomoshtyyu-jquery.html
		//так же можно подключить дополнительные поля проверки из additional-methods.js.
		$("#offer-form").validate({
				rules: {
						email: {
								required: true,
								email: true
						},
						userName: {
								required: true,
								minlength: [6]
						},
						url_input: {
								required: true,
								url: true,
								normalizer: function(value) {
										var url = value;
										// Check if it doesn't start with http:// or https:// or ftp://
										if (url && url.substr(0, 7) !== "http://" && url.substr(0, 8) !== "https://" && url.substr(0, 6) !== "ftp://") {
												// then prefix with http://
												url = "http://" + url;
										}
										// Return the new url
										return url;
								}
						}
				},
				messages: {
						email: {
								required: "Введите мыло",
								email: "Поле должно содержать символ '@' "
						},
						userName: {
								required: "Введите имя",
								minlength: "Поле дожно содержать не менее 6 символов"
						}
				}
		});

		//Эксперементы
		$("#dropmenu").click(function() { //открывается закрывается по клику можно использовать для дропдаун меню
				$("#submenu").slideToggle(100);
		});

		//Смарт-меню(дропдаун меню) с помощью плагина smartmenus

		$('#main-menu').smartmenus();
		/*ПАРА СЛОВ О ПЛАГИНАХ
		Другие плагины библиотеки jQuery для улучшения навигации
		Плагин jQuery SmartMenus прост и эффективен, однако существует
		множество других плагинов для создания расширенной навигации.
		• Плагин jPanel (jpanelmenu.com) создает меню в стиле панелей,
		которые выезжают при щелчке по значку. Подобная навигация используется
		на сервисах Facebook и Google, а также во многих приложениях
		для смартфонов.
		- Плагин Multi-level Push Menu (multi-levelpush-menu.make.rs) —
		это еще одна система меню, которая располагается на краю экрана.
		Она предусматривает множество уровней навигации, представленных
		небольшими вкладками, которые посетитель может
		открывать и закрывать. Это хороший способ для организации
		и предоставления доступа к большой коллекции ссылок.
		Если ни один из этих плагинов не заинтересовал вас, обратитесь
		к большому списку, состоящему из 15 плагинов навигации для библиотеки
		jQuery на сайте speckyboy.com/2013 /0 8 /0 1 /1 5-responsivenavigation-
		jqueryplugins/.*/

		//////////////////////////////////////////////////////////////JQUERY-UI/////////////////////////////////////////////////////////////////////////
		//Все виджеты можно смотреть сдесь и их демо, плюс структура html http://jqueryui.com

		// ДИАЛОГОВЫЕ ОКНА
		//	Вызов диалогового окна jquery-ui. Подробное описание плагина в книге js стр.440.  Все параметры тут api.jqueryui.com/dialog
		// $('#hello').dialog();

		//	Можно передавать литерал объекта регулируя различные параметры стр.445, в примере выключено перемещение и изменение размера окна
		// $('#hello').dialog({
		// 	draggable: false,
		// 	resizable: false,
		// 	position: [100,10]//стр. 458, подробно api.jqueryui.com/position
		// });

		// Можно сделать молальное окно
		$('#hello').dialog({
				modal: true,
				autoOpen: false, //окно не открывается при загрузке страницы
				show: 'slideDown',
				hide: {
						effect: 'explode',
						delay: 1000,
						duration: 300,
						easing: 'easeInQuad'
				}
		});

		// Высзов окна на клик стр. 452, на стр. 453 как закрыть окно при отправке данных формы.
		$("#linck").click(function(evt) {
				evt.preventDefault();
				$('#hello').dialog('open'); //передаем в виджет открытие окна при клике
				// $ ('#hello').dialog('close');
		});


		// ВСПЛЫВАЮЩИЕ ПОДСКАЗКИ: стр. 466(разные свойства для подсказок) стр. 467 добавить тег в подсказку
		$('[title]').tooltip({
				show: true,
				hide: 'explode',
				track: true
		});

		// ТАБЫ стр. 475, для загрузки в табы контента отдельных страниц или просто контента стр.480
		$('#tabbedpanel').tabs({
				show: 'fadeIn',
				hide: 'fadeOut',
				active: 0,
				heightStyle: 'auto', //делает одинаковую высоту всех табов
				// event: 'mouseover', //будет реагировать не на клик а на наведение мыши, можно цеплять любое событие
		});

		// Находит выделенное содержимое по айди после события load выполняется колбек функция,
		// в данном примере айди #tab и добавляет его содержимое в табпанель. стр.485
		// $('#tabbedpanel').tabs({
		// 	load: function(evt, ui) {
		// 		var newHTML =
		// 		ui.panel.find('#tab').html();
		// 		ui.panel.html(newHTML);
		// 		}
		// });


		// При переходе на одну из вкладок и потом сделать ссылку на страницу то в ссылке будет отоброжен таб который был выбран
		// var hash = location.hash;
		// 	if (hash) {
		// 	$('#tabbedpanel').tabs('load', hash)
		// }

		//АККОРДИОН

		$("#accordion").accordion({
				animate: 500,
				active: false,
				collapsible: true,
				//изменение дефолтных значков(icons) на другие из спрайтов которые находятся в images
				icons: {
						header: 'ui-icon-circle-plus',
						activeHeader: 'ui-icon-circle-minus'
				}
		});

		//jQuery UI Datepicker    стр.503
		$("#datepicker").datepicker({
				monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
				dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
				changeMonth: true,
				changeYear: true,
				dateFormat: 'dd-mm-yy',
		});

		//Selectmenu стр.510  api.jqueryui.com/selectmenu/
		$("#speed").selectmenu();

		$("#files").selectmenu();

		$("#number")
				.selectmenu()
				.selectmenu("menuWidget")
				.addClass("overflow");

		$("#salutation").selectmenu({
				width: '100%',
				// width: 500,
				change: function(event, ui) {
						//можно написать функцию которая будет делать действие при выборе одного из пунктов меню(пример такой функции стр.520)
				}
		});

		//Кнопки ввода отпарвки форм(инпуты, кнопки, чекбоксы)стр.521-530

		//Инпуты
		$(".buttons").button();

		//Флажки
		$(".checkboks").buttonset();

		//progressbar
		$( "#progressbar" ).progressbar({
					value: 0
				}).css('width', '200px');


		$('.button').click(function(evt) {
			evt.preventDefault ();
			$( "#progressbar" ).progressbar({
					value: 50
				});
		});

		//Свободное перемещение по странице стр.569-590
		$("#main-menu").draggable({
			cursor: 'pointer',
			//axis: 'x',//передвижение только по оси х
			//cancel: 'li',//при наведении на ли передвижения не произойдет(можно частично отключать элементы внутри передвигаемого окна)
			//handle: 'li',//наоборот при наведении на ли перемещение произойдет, а если навести на другую область перемещения не будет
			containment: '.holder',//перемещение только в пределах контейнера или задать значение 'parent' указание не явно на родителя
			helper: 'clone',//не перемещает сам объект, а делает его клон и его перемещает
			start: function(event){//фнукция на события(событие старт)
				$('#hello').dialog('open');
			},
			stop: function(event){
				$('#hello').dialog('close');
			},
		});



}(jQuery));
