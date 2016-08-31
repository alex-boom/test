(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

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
								normalizer: function normalizer(value) {
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
		$("#dropmenu").click(function () {
				//открывается закрывается по клику можно использовать для дропдаун меню
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
		$("#linck").click(function (evt) {
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
				heightStyle: 'auto' });

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

		//делает одинаковую высоту всех табов
		// event: 'mouseover', //будет реагировать не на клик а на наведение мыши, можно цеплять любое событие
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
				dateFormat: 'dd-mm-yy'
		});

		//Selectmenu стр.510  api.jqueryui.com/selectmenu/
		$("#speed").selectmenu();

		$("#files").selectmenu();

		$("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

		$("#salutation").selectmenu({
				width: '100%',
				// width: 500,
				change: function change(event, ui) {
						//можно написать функцию которая будет делать действие при выборе одного из пунктов меню(пример такой функции стр.520)
				}
		});

		//Кнопки ввода отпарвки форм(инпуты, кнопки, чекбоксы)стр.521-530

		//Инпуты
		$(".buttons").button();

		//Флажки
		$(".checkboks").buttonset();

		//progressbar
		$("#progressbar").progressbar({
				value: 0
		}).css('width', '200px');

		$('.button').click(function (evt) {
				evt.preventDefault();
				$("#progressbar").progressbar({
						value: 50
				});
		});

		//Свободное перемещение по странице стр.569-590
		$("#main-menu").draggable({
				cursor: 'pointer',
				//axis: 'x',//передвижение только по оси х
				//cancel: 'li',//при наведении на ли передвижения не произойдет(можно частично отключать элементы внутри передвигаемого окна)
				//handle: 'li',//наоборот при наведении на ли перемещение произойдет, а если навести на другую область перемещения не будет
				containment: '.holder', //перемещение только в пределах контейнера или задать значение 'parent' указание не явно на родителя
				helper: 'clone', //не перемещает сам объект, а делает его клон и его перемещает
				start: function start(event) {
						//фнукция на события(событие старт)
						$('#hello').dialog('open');
				},
				stop: function stop(event) {
						//stop - событие, function(); - обработчик события
						$('#hello').dialog('close');
				}
		});

		//draggable, droppable На основе двух этих плагинов можно сделать интерактивную корзину покупок стр.584, практика стр.596

		$("#draggable").draggable();
		$("#droppable").droppable({
				hoverClass: 'openTrashcan', //класс при наведени на объект
				activeClass: 'highlight', //класс при перемещении объекта
				tolerance: 'fit', //перетаскиваемый элемент должен полностью находитьсяв пределах области бросания другие параметры стр.588;
				drop: function drop(event, ui) {
						//drop - событие, function(); - обработчик события, можно сюда вписать deactivate аналог событию drop
						$(this).addClass("ui-state-highlight").find("p").text("Товар добавлен").css('color', '#6bda5e');
						// ui.helper.hide('explode'); //это ссылка на перетаскиваемый объект
				},
				activate: function activate(event, ui) {
						$(this).find("p").text("Тащите сюда");
				},
				over: function over(event, ui) {
						$(this)
						// .css({border: '10px solid green'}) можно и так задать цвет вместо параметра hoverClass: 'openTrashcan'
						.find("p").text("Бросайте!!!");
				},
				out: function out(event, ui) {
						$(this).removeClass("ui-state-highlight").find("p").html("Ну что за люди <br>").append("<div style='text-align:center;font-size:50px'>:(</div>");
				}
		});
		//Подробно объект ui стр.613
		//Ajax стр.642
		//В данном примере идет подгрузка аяксом штмл страниц в контейнер с классом ajax
		//Запись не совсем правильная
		$('.ajax').load('ajax-load-page.html'); //стр.645

		// $('.list').on('click', '.news', function(evt) {
		// 	evt.preventDefault();
		// 	$('.ajax').load('ajax-load-page1.html')
		// });

		// $('.list').on('click', '.blog', function(evt) {
		// 	evt.preventDefault();
		// 	$('.ajax').load('ajax-load-page2.html')
		// });

		// $('.list').on('click', '.forum', function(evt) {
		// 	evt.preventDefault();
		// 	$('.ajax').load('ajax-load-page3.html')
		// });
		// 		//Можно выбрать любой селектор со страницы подключаемой, а также в том числе и с индексной страницы
		// $('.list').on('click', '.other', function(evt) {
		// 	evt.preventDefault();
		// 	$('.ajax').load('ajax-load-page.html h2')//выбрал заголовки h2
		// });
		//Правильная запись
		$('.list a').click(function (evt) {
				evt.preventDefault();
				var url = $(this).attr('href');
				$('.ajax').load(url);
				// $('.ajax').load(url + " h2"); можно выбрать только заголовки h2 на загружаемых страницах или любой другой селектор
		});
		//GET, POST стр. 653

		//$.post(url, data, callback);
		//$.get(url, data, callback);
		//callback функция ее вид стр. 662
		//форма стр.668
		$('#login').submit(function () {
				var formData = $(this).serialize();
				$.post('login.php', formData, processData).error('ой');
				function processData(data) {
						console.log(data === 'pass');
						if (data === 'pass') {
								$('.form-container').html('<p>Вы авторизованы!</p>');
						} else {
								if ($('#fail').length === 0) {
										$('#formwrapper').prepend('<p id="fail">Некорректная  информация. Попробуйте еще раз</p>');
								}
						}
				} // end processData
				return false;
		}); // end submit
})(jQuery);

},{"./helpers":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBUyxDQUFULEVBQVk7Ozs7QUFJWCxJQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEI7QUFDeEIsV0FBTztBQUNMLGFBQU87QUFDTCxrQkFBVSxJQURMO0FBRUwsZUFBTztBQUZGLE9BREY7QUFLTCxnQkFBVTtBQUNSLGtCQUFVLElBREY7QUFFUixtQkFBVyxDQUFDLENBQUQ7QUFGSCxPQUxMO0FBU0wsaUJBQVc7QUFDVCxrQkFBVSxJQUREO0FBRVQsYUFBSyxJQUZJO0FBR1Qsb0JBQVksb0JBQVMsS0FBVCxFQUFnQjtBQUMxQixjQUFJLE1BQU0sS0FBVjs7QUFFQSxjQUFJLE9BQU8sSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsTUFBcUIsU0FBNUIsSUFBeUMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsTUFBcUIsVUFBOUQsSUFBNEUsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsTUFBcUIsUUFBckcsRUFBK0c7O0FBRTdHLGtCQUFNLFlBQVksR0FBbEI7QUFDRDs7QUFFRCxpQkFBTyxHQUFQO0FBQ0Q7QUFaUTtBQVROLEtBRGlCO0FBeUJ4QixjQUFVO0FBQ1IsYUFBTztBQUNMLGtCQUFVLGNBREw7QUFFTCxlQUFPO0FBRkYsT0FEQztBQUtSLGdCQUFVO0FBQ1Isa0JBQVUsYUFERjtBQUVSLG1CQUFXO0FBRkg7QUFMRjtBQXpCYyxHQUExQjs7O0FBc0NBLElBQUUsV0FBRixFQUFlLEtBQWYsQ0FBcUIsWUFBVzs7QUFDOUIsTUFBRSxVQUFGLEVBQWMsV0FBZCxDQUEwQixHQUExQjtBQUNELEdBRkQ7Ozs7QUFNQSxJQUFFLFlBQUYsRUFBZ0IsVUFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFWO0FBQ0EsTUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixHQUFoQjs7QUFFQSxHQUxEOzs7Ozs7O0FBWUQsSUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFXO0FBQzdCLFFBQUksV0FBVyxFQUFFLElBQUYsRUFBUSxTQUFSLEVBQWY7QUFDQSxNQUFFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLFFBQXBCLEVBQThCLFdBQTlCLEVBQTJDLEtBQTNDLENBQWlELElBQWpEO0FBQ0EsYUFBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCO0FBQzFCLGNBQVEsR0FBUixDQUFZLFNBQVMsTUFBckI7QUFDQyxVQUFJLFNBQVMsTUFBYixFQUFxQjtBQUNuQixVQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLHlCQUExQjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUksRUFBRSxPQUFGLEVBQVcsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUM1QixZQUFFLGNBQUYsRUFBa0IsT0FBbEIsQ0FBMEIsK0RBQTFCO0FBQ0Q7QUFDRDtBQUNELEs7QUFDRixXQUFPLEtBQVA7QUFDQSxHQWRELEU7QUF5QkQsQ0F2VEEsRUF1VEMsTUF2VEQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHRcdC8v0J/Qu9Cw0LPQuNC9INCy0LDQu9C40LTQsNGG0LjQuCDQuNC90L/Rg9GC0L7QsiDQsiDRhNC+0YDQvNC1IFZhbGlkYXRpb24g0L7Qv9C40YHQsNC90LjQtSDQstC40LTQtdC+IGh0dHA6Ly8yZGV2ZWxvcC5ydS9qcXVlcnkvcHJvdmVya2EtcG9sZXktcy1wb21vc2h0eXl1LWpxdWVyeS5odG1sXHJcblx0XHQvL9GC0LDQuiDQttC1INC80L7QttC90L4g0L/QvtC00LrQu9GO0YfQuNGC0Ywg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LvRjyDQv9GA0L7QstC10YDQutC4INC40LcgYWRkaXRpb25hbC1tZXRob2RzLmpzLlxyXG5cdFx0JChcIiNvZmZlci1mb3JtXCIpLnZhbGlkYXRlKHtcclxuXHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRlbWFpbDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRlbWFpbDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR1c2VyTmFtZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRtaW5sZW5ndGg6IFs2XVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR1cmxfaW5wdXQ6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0bm9ybWFsaXplcjogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdXJsID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgaXQgZG9lc24ndCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gb3IgZnRwOi8vXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHVybCAmJiB1cmwuc3Vic3RyKDAsIDcpICE9PSBcImh0dHA6Ly9cIiAmJiB1cmwuc3Vic3RyKDAsIDgpICE9PSBcImh0dHBzOi8vXCIgJiYgdXJsLnN1YnN0cigwLCA2KSAhPT0gXCJmdHA6Ly9cIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0aGVuIHByZWZpeCB3aXRoIGh0dHA6Ly9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsID0gXCJodHRwOi8vXCIgKyB1cmw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHVybiB0aGUgbmV3IHVybFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cmw7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdFx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogXCLQktCy0LXQtNC40YLQtSDQvNGL0LvQvlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZW1haWw6IFwi0J/QvtC70LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDRgdC40LzQstC+0LsgJ0AnIFwiXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHVzZXJOYW1lOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogXCLQktCy0LXQtNC40YLQtSDQuNC80Y9cIixcclxuXHRcdFx0XHRcdFx0XHRcdG1pbmxlbmd0aDogXCLQn9C+0LvQtSDQtNC+0LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvdC1INC80LXQvdC10LUgNiDRgdC40LzQstC+0LvQvtCyXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8v0K3QutGB0L/QtdGA0LXQvNC10L3RgtGLXHJcblx0XHQkKFwiI2Ryb3BtZW51XCIpLmNsaWNrKGZ1bmN0aW9uKCkgeyAvL9C+0YLQutGA0YvQstCw0LXRgtGB0Y8g0LfQsNC60YDRi9Cy0LDQtdGC0YHRjyDQv9C+INC60LvQuNC60YMg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINC00YDQvtC/0LTQsNGD0L0g0LzQtdC90Y5cclxuXHRcdFx0XHQkKFwiI3N1Ym1lbnVcIikuc2xpZGVUb2dnbGUoMTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8v0KHQvNCw0YDRgi3QvNC10L3RjijQtNGA0L7Qv9C00LDRg9C9INC80LXQvdGOKSDRgSDQv9C+0LzQvtGJ0YzRjiDQv9C70LDQs9C40L3QsCBzbWFydG1lbnVzXHJcblxyXG5cdFx0JCgnI21haW4tbWVudScpLnNtYXJ0bWVudXMoKTtcclxuXHRcdC8q0J/QkNCg0JAg0KHQm9Ce0JIg0J4g0J/Qm9CQ0JPQmNCd0JDQpVxyXG5cdFx00JTRgNGD0LPQuNC1INC/0LvQsNCz0LjQvdGLINCx0LjQsdC70LjQvtGC0LXQutC4IGpRdWVyeSDQtNC70Y8g0YPQu9GD0YfRiNC10L3QuNGPINC90LDQstC40LPQsNGG0LjQuFxyXG5cdFx00J/Qu9Cw0LPQuNC9IGpRdWVyeSBTbWFydE1lbnVzINC/0YDQvtGB0YIg0Lgg0Y3RhNGE0LXQutGC0LjQstC10L0sINC+0LTQvdCw0LrQviDRgdGD0YnQtdGB0YLQstGD0LXRglxyXG5cdFx00LzQvdC+0LbQtdGB0YLQstC+INC00YDRg9Cz0LjRhSDQv9C70LDQs9C40L3QvtCyINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINGA0LDRgdGI0LjRgNC10L3QvdC+0Lkg0L3QsNCy0LjQs9Cw0YbQuNC4LlxyXG5cdFx04oCiINCf0LvQsNCz0LjQvSBqUGFuZWwgKGpwYW5lbG1lbnUuY29tKSDRgdC+0LfQtNCw0LXRgiDQvNC10L3RjiDQsiDRgdGC0LjQu9C1INC/0LDQvdC10LvQtdC5LFxyXG5cdFx00LrQvtGC0L7RgNGL0LUg0LLRi9C10LfQttCw0Y7RgiDQv9GA0Lgg0YnQtdC70YfQutC1INC/0L4g0LfQvdCw0YfQutGDLiDQn9C+0LTQvtCx0L3QsNGPINC90LDQstC40LPQsNGG0LjRjyDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y9cclxuXHRcdNC90LAg0YHQtdGA0LLQuNGB0LDRhSBGYWNlYm9vayDQuCBHb29nbGUsINCwINGC0LDQutC20LUg0LLQviDQvNC90L7Qs9C40YUg0L/RgNC40LvQvtC20LXQvdC40Y/RhVxyXG5cdFx00LTQu9GPINGB0LzQsNGA0YLRhNC+0L3QvtCyLlxyXG5cdFx0LSDQn9C70LDQs9C40L0gTXVsdGktbGV2ZWwgUHVzaCBNZW51IChtdWx0aS1sZXZlbHB1c2gtbWVudS5tYWtlLnJzKSDigJRcclxuXHRcdNGN0YLQviDQtdGJ0LUg0L7QtNC90LAg0YHQuNGB0YLQtdC80LAg0LzQtdC90Y4sINC60L7RgtC+0YDQsNGPINGA0LDRgdC/0L7Qu9Cw0LPQsNC10YLRgdGPINC90LAg0LrRgNCw0Y4g0Y3QutGA0LDQvdCwLlxyXG5cdFx00J7QvdCwINC/0YDQtdC00YPRgdC80LDRgtGA0LjQstCw0LXRgiDQvNC90L7QttC10YHRgtCy0L4g0YPRgNC+0LLQvdC10Lkg0L3QsNCy0LjQs9Cw0YbQuNC4LCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L3Ri9GFXHJcblx0XHTQvdC10LHQvtC70YzRiNC40LzQuCDQstC60LvQsNC00LrQsNC80LgsINC60L7RgtC+0YDRi9C1INC/0L7RgdC10YLQuNGC0LXQu9GMINC80L7QttC10YJcclxuXHRcdNC+0YLQutGA0YvQstCw0YLRjCDQuCDQt9Cw0LrRgNGL0LLQsNGC0YwuINCt0YLQviDRhdC+0YDQvtGI0LjQuSDRgdC/0L7RgdC+0LEg0LTQu9GPINC+0YDQs9Cw0L3QuNC30LDRhtC40LhcclxuXHRcdNC4INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y8g0LTQvtGB0YLRg9C/0LAg0Log0LHQvtC70YzRiNC+0Lkg0LrQvtC70LvQtdC60YbQuNC4INGB0YHRi9C70L7Qui5cclxuXHRcdNCV0YHQu9C4INC90Lgg0L7QtNC40L0g0LjQtyDRjdGC0LjRhSDQv9C70LDQs9C40L3QvtCyINC90LUg0LfQsNC40L3RgtC10YDQtdGB0L7QstCw0Lsg0LLQsNGBLCDQvtCx0YDQsNGC0LjRgtC10YHRjFxyXG5cdFx00Log0LHQvtC70YzRiNC+0LzRgyDRgdC/0LjRgdC60YMsINGB0L7RgdGC0L7Rj9GJ0LXQvNGDINC40LcgMTUg0L/Qu9Cw0LPQuNC90L7QsiDQvdCw0LLQuNCz0LDRhtC40Lgg0LTQu9GPINCx0LjQsdC70LjQvtGC0LXQutC4XHJcblx0XHRqUXVlcnkg0L3QsCDRgdCw0LnRgtC1IHNwZWNreWJveS5jb20vMjAxMyAvMCA4IC8wIDEgLzEgNS1yZXNwb25zaXZlbmF2aWdhdGlvbi1cclxuXHRcdGpxdWVyeXBsdWdpbnMvLiovXHJcblxyXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9KUVVFUlktVUkvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHQvL9CS0YHQtSDQstC40LTQttC10YLRiyDQvNC+0LbQvdC+INGB0LzQvtGC0YDQtdGC0Ywg0YHQtNC10YHRjCDQuCDQuNGFINC00LXQvNC+LCDQv9C70Y7RgSDRgdGC0YDRg9C60YLRg9GA0LAgaHRtbCBodHRwOi8vanF1ZXJ5dWkuY29tXHJcblxyXG5cdFx0Ly8g0JTQmNCQ0JvQntCT0J7QktCr0JUg0J7QmtCd0JBcclxuXHRcdC8vXHTQktGL0LfQvtCyINC00LjQsNC70L7Qs9C+0LLQvtCz0L4g0L7QutC90LAganF1ZXJ5LXVpLiDQn9C+0LTRgNC+0LHQvdC+0LUg0L7Qv9C40YHQsNC90LjQtSDQv9C70LDQs9C40L3QsCDQsiDQutC90LjQs9C1IGpzINGB0YLRgC40NDAuICDQktGB0LUg0L/QsNGA0LDQvNC10YLRgNGLINGC0YPRgiBhcGkuanF1ZXJ5dWkuY29tL2RpYWxvZ1xyXG5cdFx0Ly8gJCgnI2hlbGxvJykuZGlhbG9nKCk7XHJcblxyXG5cdFx0Ly9cdNCc0L7QttC90L4g0L/QtdGA0LXQtNCw0LLQsNGC0Ywg0LvQuNGC0LXRgNCw0Lsg0L7QsdGK0LXQutGC0LAg0YDQtdCz0YPQu9C40YDRg9GPINGA0LDQt9C70LjRh9C90YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0YHRgtGALjQ0NSwg0LIg0L/RgNC40LzQtdGA0LUg0LLRi9C60LvRjtGH0LXQvdC+INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0Lgg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQt9C80LXRgNCwINC+0LrQvdCwXHJcblx0XHQvLyAkKCcjaGVsbG8nKS5kaWFsb2coe1xyXG5cdFx0Ly8gXHRkcmFnZ2FibGU6IGZhbHNlLFxyXG5cdFx0Ly8gXHRyZXNpemFibGU6IGZhbHNlLFxyXG5cdFx0Ly8gXHRwb3NpdGlvbjogWzEwMCwxMF0vL9GB0YLRgC4gNDU4LCDQv9C+0LTRgNC+0LHQvdC+IGFwaS5qcXVlcnl1aS5jb20vcG9zaXRpb25cclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdC8vINCc0L7QttC90L4g0YHQtNC10LvQsNGC0Ywg0LzQvtC70LDQu9GM0L3QvtC1INC+0LrQvdC+XHJcblx0XHQkKCcjaGVsbG8nKS5kaWFsb2coe1xyXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxyXG5cdFx0XHRcdGF1dG9PcGVuOiBmYWxzZSwgLy/QvtC60L3QviDQvdC1INC+0YLQutGA0YvQstCw0LXRgtGB0Y8g0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRi1xyXG5cdFx0XHRcdHNob3c6ICdzbGlkZURvd24nLFxyXG5cdFx0XHRcdGhpZGU6IHtcclxuXHRcdFx0XHRcdFx0ZWZmZWN0OiAnZXhwbG9kZScsXHJcblx0XHRcdFx0XHRcdGRlbGF5OiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwLFxyXG5cdFx0XHRcdFx0XHRlYXNpbmc6ICdlYXNlSW5RdWFkJ1xyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCS0YvRgdC30L7QsiDQvtC60L3QsCDQvdCwINC60LvQuNC6INGB0YLRgC4gNDUyLCDQvdCwINGB0YLRgC4gNDUzINC60LDQuiDQt9Cw0LrRgNGL0YLRjCDQvtC60L3QviDQv9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQtNCw0L3QvdGL0YUg0YTQvtGA0LzRiy5cclxuXHRcdCQoXCIjbGluY2tcIikuY2xpY2soZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0JCgnI2hlbGxvJykuZGlhbG9nKCdvcGVuJyk7IC8v0L/QtdGA0LXQtNCw0LXQvCDQsiDQstC40LTQttC10YIg0L7RgtC60YDRi9GC0LjQtSDQvtC60L3QsCDQv9GA0Lgg0LrQu9C40LrQtVxyXG5cdFx0XHRcdC8vICQgKCcjaGVsbG8nKS5kaWFsb2coJ2Nsb3NlJyk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8g0JLQodCf0JvQq9CS0JDQrtCp0JjQlSDQn9Ce0JTQodCa0JDQl9Ca0Jg6INGB0YLRgC4gNDY2KNGA0LDQt9C90YvQtSDRgdCy0L7QudGB0YLQstCwINC00LvRjyDQv9C+0LTRgdC60LDQt9C+0LopINGB0YLRgC4gNDY3INC00L7QsdCw0LLQuNGC0Ywg0YLQtdCzINCyINC/0L7QtNGB0LrQsNC30LrRg1xyXG5cdFx0JCgnW3RpdGxlXScpLnRvb2x0aXAoe1xyXG5cdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0aGlkZTogJ2V4cGxvZGUnLFxyXG5cdFx0XHRcdHRyYWNrOiB0cnVlXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQotCQ0JHQqyDRgdGC0YAuIDQ3NSwg0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0LIg0YLQsNCx0Ysg0LrQvtC90YLQtdC90YLQsCDQvtGC0LTQtdC70YzQvdGL0YUg0YHRgtGA0LDQvdC40YYg0LjQu9C4INC/0YDQvtGB0YLQviDQutC+0L3RgtC10L3RgtCwINGB0YLRgC40ODBcclxuXHRcdCQoJyN0YWJiZWRwYW5lbCcpLnRhYnMoe1xyXG5cdFx0XHRcdHNob3c6ICdmYWRlSW4nLFxyXG5cdFx0XHRcdGhpZGU6ICdmYWRlT3V0JyxcclxuXHRcdFx0XHRhY3RpdmU6IDAsXHJcblx0XHRcdFx0aGVpZ2h0U3R5bGU6ICdhdXRvJywgLy/QtNC10LvQsNC10YIg0L7QtNC40L3QsNC60L7QstGD0Y4g0LLRi9GB0L7RgtGDINCy0YHQtdGFINGC0LDQsdC+0LJcclxuXHRcdFx0XHQvLyBldmVudDogJ21vdXNlb3ZlcicsIC8v0LHRg9C00LXRgiDRgNC10LDQs9C40YDQvtCy0LDRgtGMINC90LUg0L3QsCDQutC70LjQuiDQsCDQvdCwINC90LDQstC10LTQtdC90LjQtSDQvNGL0YjQuCwg0LzQvtC20L3QviDRhtC10L/Qu9GP0YLRjCDQu9GO0LHQvtC1INGB0L7QsdGL0YLQuNC1XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQndCw0YXQvtC00LjRgiDQstGL0LTQtdC70LXQvdC90L7QtSDRgdC+0LTQtdGA0LbQuNC80L7QtSDQv9C+INCw0LnQtNC4INC/0L7RgdC70LUg0YHQvtCx0YvRgtC40Y8gbG9hZCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINC60L7Qu9Cx0LXQuiDRhNGD0L3QutGG0LjRjyxcclxuXHRcdC8vINCyINC00LDQvdC90L7QvCDQv9GA0LjQvNC10YDQtSDQsNC50LTQuCAjdGFiINC4INC00L7QsdCw0LLQu9GP0LXRgiDQtdCz0L4g0YHQvtC00LXRgNC20LjQvNC+0LUg0LIg0YLQsNCx0L/QsNC90LXQu9GMLiDRgdGC0YAuNDg1XHJcblx0XHQvLyAkKCcjdGFiYmVkcGFuZWwnKS50YWJzKHtcclxuXHRcdC8vIFx0bG9hZDogZnVuY3Rpb24oZXZ0LCB1aSkge1xyXG5cdFx0Ly8gXHRcdHZhciBuZXdIVE1MID1cclxuXHRcdC8vIFx0XHR1aS5wYW5lbC5maW5kKCcjdGFiJykuaHRtbCgpO1xyXG5cdFx0Ly8gXHRcdHVpLnBhbmVsLmh0bWwobmV3SFRNTCk7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cclxuXHRcdC8vINCf0YDQuCDQv9C10YDQtdGF0L7QtNC1INC90LAg0L7QtNC90YMg0LjQtyDQstC60LvQsNC00L7QuiDQuCDQv9C+0YLQvtC8INGB0LTQtdC70LDRgtGMINGB0YHRi9C70LrRgyDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YLQviDQsiDRgdGB0YvQu9C60LUg0LHRg9C00LXRgiDQvtGC0L7QsdGA0L7QttC10L0g0YLQsNCxINC60L7RgtC+0YDRi9C5INCx0YvQuyDQstGL0LHRgNCw0L1cclxuXHRcdC8vIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcclxuXHRcdC8vIFx0aWYgKGhhc2gpIHtcclxuXHRcdC8vIFx0JCgnI3RhYmJlZHBhbmVsJykudGFicygnbG9hZCcsIGhhc2gpXHJcblx0XHQvLyB9XHJcblxyXG5cdFx0Ly/QkNCa0JrQntCg0JTQmNCe0J1cclxuXHJcblx0XHQkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oe1xyXG5cdFx0XHRcdGFuaW1hdGU6IDUwMCxcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdC8v0LjQt9C80LXQvdC10L3QuNC1INC00LXRhNC+0LvRgtC90YvRhSDQt9C90LDRh9C60L7QsihpY29ucykg0L3QsCDQtNGA0YPQs9C40LUg0LjQtyDRgdC/0YDQsNC50YLQvtCyINC60L7RgtC+0YDRi9C1INC90LDRhdC+0LTRj9GC0YHRjyDQsiBpbWFnZXNcclxuXHRcdFx0XHRpY29uczoge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXI6ICd1aS1pY29uLWNpcmNsZS1wbHVzJyxcclxuXHRcdFx0XHRcdFx0YWN0aXZlSGVhZGVyOiAndWktaWNvbi1jaXJjbGUtbWludXMnXHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9qUXVlcnkgVUkgRGF0ZXBpY2tlciAgICDRgdGC0YAuNTAzXHJcblx0XHQkKFwiI2RhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcih7XHJcblx0XHRcdFx0bW9udGhOYW1lczogW1wi0K/QvdCy0LDRgNGMXCIsIFwi0KTQtdCy0YDQsNC70YxcIiwgXCLQnNCw0YDRglwiLCBcItCQ0L/RgNC10LvRjFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvdGMXCIsIFwi0JjRjtC70YxcIiwgXCLQkNCy0LPRg9GB0YJcIiwgXCLQodC10L3RgtGP0LHRgNGMXCIsIFwi0J7QutGC0Y/QsdGA0YxcIiwgXCLQndC+0Y/QsdGA0YxcIiwgXCLQlNC10LrQsNCx0YDRjFwiXSxcclxuXHRcdFx0XHRtb250aE5hbWVzU2hvcnQ6IFtcItCv0L3QslwiLCBcItCk0LXQslwiLCBcItCc0LDRgFwiLCBcItCQ0L/RgFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvVwiLCBcItCY0Y7Qu1wiLCBcItCQ0LLQs1wiLCBcItCh0LXQvVwiLCBcItCe0LrRglwiLCBcItCd0L7Rj1wiLCBcItCU0LXQulwiXSxcclxuXHRcdFx0XHRkYXlOYW1lc01pbjogW1wi0JLRgVwiLCBcItCf0L1cIiwgXCLQktGCXCIsIFwi0KHRgFwiLCBcItCn0YJcIiwgXCLQn9GCXCIsIFwi0KHQsVwiXSxcclxuXHRcdFx0XHRjaGFuZ2VNb250aDogdHJ1ZSxcclxuXHRcdFx0XHRjaGFuZ2VZZWFyOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGVGb3JtYXQ6ICdkZC1tbS15eScsXHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1NlbGVjdG1lbnUg0YHRgtGALjUxMCAgYXBpLmpxdWVyeXVpLmNvbS9zZWxlY3RtZW51L1xyXG5cdFx0JChcIiNzcGVlZFwiKS5zZWxlY3RtZW51KCk7XHJcblxyXG5cdFx0JChcIiNmaWxlc1wiKS5zZWxlY3RtZW51KCk7XHJcblxyXG5cdFx0JChcIiNudW1iZXJcIilcclxuXHRcdFx0XHQuc2VsZWN0bWVudSgpXHJcblx0XHRcdFx0LnNlbGVjdG1lbnUoXCJtZW51V2lkZ2V0XCIpXHJcblx0XHRcdFx0LmFkZENsYXNzKFwib3ZlcmZsb3dcIik7XHJcblxyXG5cdFx0JChcIiNzYWx1dGF0aW9uXCIpLnNlbGVjdG1lbnUoe1xyXG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0Ly8gd2lkdGg6IDUwMCxcclxuXHRcdFx0XHRjaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG5cdFx0XHRcdFx0XHQvL9C80L7QttC90L4g0L3QsNC/0LjRgdCw0YLRjCDRhNGD0L3QutGG0LjRjiDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINC00LXQu9Cw0YLRjCDQtNC10LnRgdGC0LLQuNC1INC/0YDQuCDQstGL0LHQvtGA0LUg0L7QtNC90L7Qs9C+INC40Lcg0L/Rg9C90LrRgtC+0LIg0LzQtdC90Y4o0L/RgNC40LzQtdGAINGC0LDQutC+0Lkg0YTRg9C90LrRhtC40Lgg0YHRgtGALjUyMClcclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL9Ca0L3QvtC/0LrQuCDQstCy0L7QtNCwINC+0YLQv9Cw0YDQstC60Lgg0YTQvtGA0Lwo0LjQvdC/0YPRgtGLLCDQutC90L7Qv9C60LgsINGH0LXQutCx0L7QutGB0Ysp0YHRgtGALjUyMS01MzBcclxuXHJcblx0XHQvL9CY0L3Qv9GD0YLRi1xyXG5cdFx0JChcIi5idXR0b25zXCIpLmJ1dHRvbigpO1xyXG5cclxuXHRcdC8v0KTQu9Cw0LbQutC4XHJcblx0XHQkKFwiLmNoZWNrYm9rc1wiKS5idXR0b25zZXQoKTtcclxuXHJcblx0XHQvL3Byb2dyZXNzYmFyXHJcblx0XHQkKCBcIiNwcm9ncmVzc2JhclwiICkucHJvZ3Jlc3NiYXIoe1xyXG5cdFx0XHRcdFx0dmFsdWU6IDBcclxuXHRcdFx0XHR9KS5jc3MoJ3dpZHRoJywgJzIwMHB4Jyk7XHJcblxyXG5cclxuXHRcdCQoJy5idXR0b24nKS5jbGljayhmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0ICgpO1xyXG5cdFx0XHQkKCBcIiNwcm9ncmVzc2JhclwiICkucHJvZ3Jlc3NiYXIoe1xyXG5cdFx0XHRcdFx0dmFsdWU6IDUwXHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL9Ch0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1INC/0L4g0YHRgtGA0LDQvdC40YbQtSDRgdGC0YAuNTY5LTU5MFxyXG5cdFx0JChcIiNtYWluLW1lbnVcIikuZHJhZ2dhYmxlKHtcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdC8vYXhpczogJ3gnLC8v0L/QtdGA0LXQtNCy0LjQttC10L3QuNC1INGC0L7Qu9GM0LrQviDQv9C+INC+0YHQuCDRhVxyXG5cdFx0XHQvL2NhbmNlbDogJ2xpJywvL9C/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0L3QsCDQu9C4INC/0LXRgNC10LTQstC40LbQtdC90LjRjyDQvdC1INC/0YDQvtC40LfQvtC50LTQtdGCKNC80L7QttC90L4g0YfQsNGB0YLQuNGH0L3QviDQvtGC0LrQu9GO0YfQsNGC0Ywg0Y3Qu9C10LzQtdC90YLRiyDQstC90YPRgtGA0Lgg0L/QtdGA0LXQtNCy0LjQs9Cw0LXQvNC+0LPQviDQvtC60L3QsClcclxuXHRcdFx0Ly9oYW5kbGU6ICdsaScsLy/QvdCw0L7QsdC+0YDQvtGCINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0L3QsCDQu9C4INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/RgNC+0LjQt9C+0LnQtNC10YIsINCwINC10YHQu9C4INC90LDQstC10YHRgtC4INC90LAg0LTRgNGD0LPRg9GOINC+0LHQu9Cw0YHRgtGMINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0L3QtSDQsdGD0LTQtdGCXHJcblx0XHRcdGNvbnRhaW5tZW50OiAnLmhvbGRlcicsLy/Qv9C10YDQtdC80LXRidC10L3QuNC1INGC0L7Qu9GM0LrQviDQsiDQv9GA0LXQtNC10LvQsNGFINC60L7QvdGC0LXQudC90LXRgNCwINC40LvQuCDQt9Cw0LTQsNGC0Ywg0LfQvdCw0YfQtdC90LjQtSAncGFyZW50JyDRg9C60LDQt9Cw0L3QuNC1INC90LUg0Y/QstC90L4g0L3QsCDRgNC+0LTQuNGC0LXQu9GPXHJcblx0XHRcdGhlbHBlcjogJ2Nsb25lJywvL9C90LUg0L/QtdGA0LXQvNC10YnQsNC10YIg0YHQsNC8INC+0LHRitC10LrRgiwg0LAg0LTQtdC70LDQtdGCINC10LPQviDQutC70L7QvSDQuCDQtdCz0L4g0L/QtdGA0LXQvNC10YnQsNC10YJcclxuXHRcdFx0c3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KXsvL9GE0L3Rg9C60YbQuNGPINC90LAg0YHQvtCx0YvRgtC40Y8o0YHQvtCx0YvRgtC40LUg0YHRgtCw0YDRgilcclxuXHRcdFx0XHQkKCcjaGVsbG8nKS5kaWFsb2coJ29wZW4nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RvcDogZnVuY3Rpb24oZXZlbnQpey8vc3RvcCAtINGB0L7QsdGL0YLQuNC1LCBmdW5jdGlvbigpOyAtINC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPXHJcblx0XHRcdFx0JCgnI2hlbGxvJykuZGlhbG9nKCdjbG9zZScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHQvL2RyYWdnYWJsZSwgZHJvcHBhYmxlINCd0LAg0L7RgdC90L7QstC1INC00LLRg9GFINGN0YLQuNGFINC/0LvQsNCz0LjQvdC+0LIg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQuNC90YLQtdGA0LDQutGC0LjQstC90YPRjiDQutC+0YDQt9C40L3RgyDQv9C+0LrRg9C/0L7QuiDRgdGC0YAuNTg0LCDQv9GA0LDQutGC0LjQutCwINGB0YLRgC41OTZcclxuXHJcblx0XHQkKCBcIiNkcmFnZ2FibGVcIiApLmRyYWdnYWJsZSgpO1xyXG5cdFx0JCggXCIjZHJvcHBhYmxlXCIgKS5kcm9wcGFibGUoe1xyXG5cdFx0XHRob3ZlckNsYXNzOiAnb3BlblRyYXNoY2FuJyxcdFx0Ly/QutC70LDRgdGBINC/0YDQuCDQvdCw0LLQtdC00LXQvdC4INC90LAg0L7QsdGK0LXQutGCXHJcblx0XHRcdGFjdGl2ZUNsYXNzOiAnaGlnaGxpZ2h0JyxcdFx0XHQvL9C60LvQsNGB0YEg0L/RgNC4INC/0LXRgNC10LzQtdGJ0LXQvdC40Lgg0L7QsdGK0LXQutGC0LBcclxuXHRcdFx0dG9sZXJhbmNlOiAnZml0JyxcdFx0XHRcdFx0XHRcdC8v0L/QtdGA0LXRgtCw0YHQutC40LLQsNC10LzRi9C5INGN0LvQtdC80LXQvdGCINC00L7Qu9C20LXQvSDQv9C+0LvQvdC+0YHRgtGM0Y4g0L3QsNGF0L7QtNC40YLRjNGB0Y/QsiDQv9GA0LXQtNC10LvQsNGFINC+0LHQu9Cw0YHRgtC4INCx0YDQvtGB0LDQvdC40Y8g0LTRgNGD0LPQuNC1INC/0LDRgNCw0LzQtdGC0YDRiyDRgdGC0YAuNTg4O1xyXG5cdFx0XHRkcm9wOiBmdW5jdGlvbiggZXZlbnQsIHVpICkgey8vZHJvcCAtINGB0L7QsdGL0YLQuNC1LCBmdW5jdGlvbigpOyAtINC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPLCDQvNC+0LbQvdC+INGB0Y7QtNCwINCy0L/QuNGB0LDRgtGMIGRlYWN0aXZhdGUg0LDQvdCw0LvQvtCzINGB0L7QsdGL0YLQuNGOIGRyb3BcclxuXHRcdFx0XHQkKCB0aGlzIClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyggXCJ1aS1zdGF0ZS1oaWdobGlnaHRcIiApXHJcblx0XHRcdFx0XHQuZmluZCggXCJwXCIgKVxyXG5cdFx0XHRcdFx0LnRleHQoIFwi0KLQvtCy0LDRgCDQtNC+0LHQsNCy0LvQtdC9XCIgKVxyXG5cdFx0XHRcdFx0LmNzcygnY29sb3InLCAnIzZiZGE1ZScpO1xyXG5cdFx0XHRcdFx0Ly8gdWkuaGVscGVyLmhpZGUoJ2V4cGxvZGUnKTsgLy/RjdGC0L4g0YHRgdGL0LvQutCwINC90LAg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC10LzRi9C5INC+0LHRitC10LrRglxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY3RpdmF0ZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuXHRcdFx0XHQkKCB0aGlzIClcclxuXHRcdFx0XHRcdC5maW5kKCBcInBcIiApXHJcblx0XHRcdFx0XHQudGV4dCggXCLQotCw0YnQuNGC0LUg0YHRjtC00LBcIiApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvdmVyOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cdFx0XHRcdCQoIHRoaXMgKVxyXG5cdFx0XHRcdFx0Ly8gLmNzcyh7Ym9yZGVyOiAnMTBweCBzb2xpZCBncmVlbid9KSDQvNC+0LbQvdC+INC4INGC0LDQuiDQt9Cw0LTQsNGC0Ywg0YbQstC10YIg0LLQvNC10YHRgtC+INC/0LDRgNCw0LzQtdGC0YDQsCBob3ZlckNsYXNzOiAnb3BlblRyYXNoY2FuJ1xyXG5cdFx0XHRcdFx0LmZpbmQoIFwicFwiIClcclxuXHRcdFx0XHRcdC50ZXh0KCBcItCR0YDQvtGB0LDQudGC0LUhISFcIiApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvdXQ6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0JCggdGhpcyApXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIFwidWktc3RhdGUtaGlnaGxpZ2h0XCIgKVxyXG5cdFx0XHRcdFx0LmZpbmQoIFwicFwiIClcclxuXHRcdFx0XHRcdC5odG1sKCBcItCd0YMg0YfRgtC+INC30LAg0LvRjtC00LggPGJyPlwiKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChcIjxkaXYgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTo1MHB4Jz46KDwvZGl2PlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFx0XHRcdC8v0J/QvtC00YDQvtCx0L3QviDQvtCx0YrQtdC60YIgdWkg0YHRgtGALjYxM1xyXG5cdFx0XHRcdFx0Ly9BamF4INGB0YLRgC42NDJcclxuXHRcdFx0XHRcdC8v0JIg0LTQsNC90L3QvtC8INC/0YDQuNC80LXRgNC1INC40LTQtdGCINC/0L7QtNCz0YDRg9C30LrQsCDQsNGP0LrRgdC+0Lwg0YjRgtC80Lsg0YHRgtGA0LDQvdC40YYg0LIg0LrQvtC90YLQtdC50L3QtdGAINGBINC60LvQsNGB0YHQvtC8IGFqYXhcclxuXHRcdFx0XHRcdC8v0JfQsNC/0LjRgdGMINC90LUg0YHQvtCy0YHQtdC8INC/0YDQsNCy0LjQu9GM0L3QsNGPXHJcblx0XHRcdCQoJy5hamF4JykubG9hZCgnYWpheC1sb2FkLXBhZ2UuaHRtbCcpOy8v0YHRgtGALjY0NVxyXG5cclxuXHRcdFx0Ly8gJCgnLmxpc3QnKS5vbignY2xpY2snLCAnLm5ld3MnLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0Ly8gXHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Ly8gXHQkKCcuYWpheCcpLmxvYWQoJ2FqYXgtbG9hZC1wYWdlMS5odG1sJylcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyAkKCcubGlzdCcpLm9uKCdjbGljaycsICcuYmxvZycsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHQvLyBcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQvLyBcdCQoJy5hamF4JykubG9hZCgnYWpheC1sb2FkLXBhZ2UyLmh0bWwnKVxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdC8vICQoJy5saXN0Jykub24oJ2NsaWNrJywgJy5mb3J1bScsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHQvLyBcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQvLyBcdCQoJy5hamF4JykubG9hZCgnYWpheC1sb2FkLXBhZ2UzLmh0bWwnKVxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0Ly8gXHRcdC8v0JzQvtC20L3QviDQstGL0LHRgNCw0YLRjCDQu9GO0LHQvtC5INGB0LXQu9C10LrRgtC+0YAg0YHQviDRgdGC0YDQsNC90LjRhtGLINC/0L7QtNC60LvRjtGH0LDQtdC80L7QuSwg0LAg0YLQsNC60LbQtSDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQuCDRgSDQuNC90LTQtdC60YHQvdC+0Lkg0YHRgtGA0LDQvdC40YbRi1xyXG5cdFx0XHQvLyAkKCcubGlzdCcpLm9uKCdjbGljaycsICcub3RoZXInLCBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0Ly8gXHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Ly8gXHQkKCcuYWpheCcpLmxvYWQoJ2FqYXgtbG9hZC1wYWdlLmh0bWwgaDInKS8v0LLRi9Cx0YDQsNC7INC30LDQs9C+0LvQvtCy0LrQuCBoMlxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdC8v0J/RgNCw0LLQuNC70YzQvdCw0Y8g0LfQsNC/0LjRgdGMXHJcblx0XHRcdCQoJy5saXN0IGEnKS5jbGljayhmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR2YXIgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdFx0JCgnLmFqYXgnKS5sb2FkKHVybCk7XHJcblx0XHRcdFx0Ly8gJCgnLmFqYXgnKS5sb2FkKHVybCArIFwiIGgyXCIpOyDQvNC+0LbQvdC+INCy0YvQsdGA0LDRgtGMINGC0L7Qu9GM0LrQviDQt9Cw0LPQvtC70L7QstC60LggaDIg0L3QsCDQt9Cw0LPRgNGD0LbQsNC10LzRi9GFINGB0YLRgNCw0L3QuNGG0LDRhSDQuNC70Lgg0LvRjtCx0L7QuSDQtNGA0YPQs9C+0Lkg0YHQtdC70LXQutGC0L7RgFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHQvL0dFVCwgUE9TVCDRgdGC0YAuIDY1M1xyXG5cclxuXHRcdFx0Ly8kLnBvc3QodXJsLCBkYXRhLCBjYWxsYmFjayk7XHJcblx0XHRcdC8vJC5nZXQodXJsLCBkYXRhLCBjYWxsYmFjayk7XHJcblx0XHRcdC8vY2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LXQtSDQstC40LQg0YHRgtGALiA2NjJcclxuXHRcdFx0Ly/RhNC+0YDQvNCwINGB0YLRgC42NjhcclxuXHRcdCQoJyNsb2dpbicpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuXHRcdFx0JC5wb3N0KCdsb2dpbi5waHAnLCBmb3JtRGF0YSwgcHJvY2Vzc0RhdGEpLmVycm9yKCfQvtC5Jyk7XHJcblx0XHRcdGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhID09PSAncGFzcycpO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEgPT09ICdwYXNzJykge1xyXG5cdFx0XHRcdFx0XHQgJCgnLmZvcm0tY29udGFpbmVyJykuaHRtbCgnPHA+0JLRiyDQsNCy0YLQvtGA0LjQt9C+0LLQsNC90YshPC9wPicpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0IGlmICgkKCcjZmFpbCcpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdCAkKCcjZm9ybXdyYXBwZXInKS5wcmVwZW5kKCc8cCBpZD1cImZhaWxcIj7QndC10LrQvtGA0YDQtdC60YLQvdCw0Y8gINC40L3RhNC+0YDQvNCw0YbQuNGPLiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0LUg0YDQsNC3PC9wPicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSAvLyBlbmQgcHJvY2Vzc0RhdGFcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSk7IC8vIGVuZCBzdWJtaXRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0oalF1ZXJ5KSk7XHJcbiIsInZhciBIUCA9IHtcclxuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQOyJdfQ==
