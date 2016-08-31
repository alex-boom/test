(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Обворачиваем код jQuery функцией noConflict для избежания конфликтов с другими библиотеками JS использующими переменную '$'.
jQuery.noConflict()(function () {

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

				//$.getJSON(url, data, callback); getJSON метод предназначен для обработки данных с сервера в фрмате JSON

				//* url - адрсс обработчика
				//* data - это переменная с значениями которые отправляются серверу на обработку
				//* callback-функция обрабатывает полученный ответ с сервера
				//**полученный ответ так же записывается в переменную data(можно назвать иначе) и передается в качестве первого аргумента callback-функции

				//callback функция ее вид стр. 662
				//форма стр.668
				$('#login').submit(function () {
						var formData = $(this).serialize(); //serialize собирает введенные данные из формы в виде имя: значение(username=boom&password=5555)
						$.post('login.php', formData, processData).error('ой');
						function processData(result) {
								console.log(result === 'pass');
								if (result === 'pass') {
										$('.main').html('<p>Вы авторизованы!</p>');
								} else {
										if ($('#fail').length === 0) {
												$('#formwrapper').prepend('<p id="fail">Некорректная  информация. Попробуйте еще раз</p>');
										}
								}
						} // end processData
						return false;
				}); // end submit

				//Обработка в цикле each полученных данных от сервера в формате JSON(данные получены с внешнего сервера)
				//С внешних сервером получить данные в формате JSON невозможно по безопастности, но используя способ JSONP это возможно.
				//**JSONP - способ получения данных с сервера, использующий JSON в качестве способа кодирования
				//*Пример: фрагметн в переменной URL - ?jsoncallback=? дает команду серверу передать данные способом JSONP.
				var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
				var searchInfo = {
						// change this ID to another flickr ID (like your own if you have one)
						id: "25053835@N03",
						format: "json"
				};

				$.getJSON(URL, searchInfo, function (data) {

						var photoHTML = '';

						//Аргументы (i,photo) в анонимной функции метода each работают с массивом объектов data.items
						//являют собой переменные i это индекс объекта в цикле, а photo это сам объект.
						$.each(data.items, function (i, photo) {
								photoHTML += '<span class="image">';
								photoHTML += '<a href="' + photo.link + '">';
								photoHTML += '<img src="' + photo.media.m.replace('_m', '_s') + '"></a></span>';
						}); // end each
						$('#photos').append(photoHTML);
				}); // end get JSON

				//Локальное и серверное хранение данных стр. 725

				//Функции обхода дерева DOM стр.742(работа с выборкой селектора jquery внутри функции события).

				// alert($().jquery); узнать версию jquery

				//метод slice вырезать часть строки.
				/*
    var $selector = $('.holder h1'),
    		test = $selector.text(),
    		rezult = test.slice(10);
    		$selector.text(rezult);
    */

				//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ стр.766

				var sentence = 'April is the cruelest month.';
				var aprMatch = /Apr(il)?\b/;
				//функция search проверяет наличие заданной строки в переменной регулярного выражения если
				//находит возвращает индекс первого символа строки если нет то возвращает -1
				if (sentence.search(aprMatch) != -1) {
						// найдена строка Apr или April
				} else {}
						//не найдено

						//поиск в содержимом конкретного выражения стр.779

				$("html, body").animate({
						scrollTop: $(".block1").offset().top
				}, 100);
		})(jQuery);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7OztBQUdBLE9BQU8sVUFBUCxHQUFvQixZQUFVOztBQUU1QixhQUFTLENBQVQsRUFBWTs7OztBQUlaLE1BQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQjtBQUN4QixhQUFPO0FBQ0wsZUFBTztBQUNMLG9CQUFVLElBREw7QUFFTCxpQkFBTztBQUZGLFNBREY7QUFLTCxrQkFBVTtBQUNSLG9CQUFVLElBREY7QUFFUixxQkFBVyxDQUFDLENBQUQ7QUFGSCxTQUxMO0FBU0wsbUJBQVc7QUFDVCxvQkFBVSxJQUREO0FBRVQsZUFBSyxJQUZJO0FBR1Qsc0JBQVksb0JBQVMsS0FBVCxFQUFnQjtBQUMxQixnQkFBSSxNQUFNLEtBQVY7O0FBRUEsZ0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxNQUFxQixTQUE1QixJQUF5QyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxNQUFxQixVQUE5RCxJQUE0RSxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxNQUFxQixRQUFyRyxFQUErRzs7QUFFN0csb0JBQU0sWUFBWSxHQUFsQjtBQUNEOztBQUVELG1CQUFPLEdBQVA7QUFDRDtBQVpRO0FBVE4sT0FEaUI7QUF5QnhCLGdCQUFVO0FBQ1IsZUFBTztBQUNMLG9CQUFVLGNBREw7QUFFTCxpQkFBTztBQUZGLFNBREM7QUFLUixrQkFBVTtBQUNSLG9CQUFVLGFBREY7QUFFUixxQkFBVztBQUZIO0FBTEY7QUF6QmMsS0FBMUI7OztBQXNDQSxNQUFFLFdBQUYsRUFBZSxLQUFmLENBQXFCLFlBQVc7O0FBQzlCLFFBQUUsVUFBRixFQUFjLFdBQWQsQ0FBMEIsR0FBMUI7QUFDRCxLQUZEOzs7O0FBTUEsTUFBRSxZQUFGLEVBQWdCLFVB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QXNCLElBQXRCLEVBQTJCLElBQTNCLENBQWYsR0FBa0QsZUFBL0Q7QUFDQSxPQUpELEU7QUFLQSxRQUFFLFNBQUYsRUFBYSxNQUFiLENBQW9CLFNBQXBCO0FBQ0EsS0FaRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0MsUUFBSSxXQUFXLDhCQUFmO0FBQ0EsUUFBSSxXQUFXLFlBQWY7OztBQUdBLFFBQUksU0FBUyxNQUFULENBQWdCLFFBQWhCLEtBQTZCLENBQUMsQ0FBbEMsRUFBcUM7O0FBRXBDLEtBRkQsTUFFTyxDQUVOOzs7OztBQUdELE1BQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN2QixpQkFBWSxFQUFFLFNBQUYsRUFBYSxNQUFiLEdBQXNCO0FBRFgsS0FBeEIsRUFFRyxHQUZIO0FBMkJELEdBM1lBLEVBMllDLE1BM1lELENBQUQ7QUE2WUEsQ0EvWUQ7Ozs7Ozs7O0FDSEEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Q7QUFITSxDQUFUOztrQkFNZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuLy/QntCx0LLQvtGA0LDRh9C40LLQsNC10Lwg0LrQvtC0IGpRdWVyeSDRhNGD0L3QutGG0LjQtdC5IG5vQ29uZmxpY3Qg0LTQu9GPINC40LfQsdC10LbQsNC90LjRjyDQutC+0L3RhNC70LjQutGC0L7QsiDRgSDQtNGA0YPQs9C40LzQuCDQsdC40LHQu9C40L7RgtC10LrQsNC80LggSlMg0LjRgdC/0L7Qu9GM0LfRg9GO0YnQuNC80Lgg0L/QtdGA0LXQvNC10L3QvdGD0Y4gJyQnLlxyXG5qUXVlcnkubm9Db25mbGljdCgpKGZ1bmN0aW9uKCl7XHJcblxyXG5cdChmdW5jdGlvbigkKSB7XHJcblxyXG5cdFx0Ly/Qn9C70LDQs9C40L0g0LLQsNC70LjQtNCw0YbQuNC4INC40L3Qv9GD0YLQvtCyINCyINGE0L7RgNC80LUgVmFsaWRhdGlvbiDQvtC/0LjRgdCw0L3QuNC1INCy0LjQtNC10L4gaHR0cDovLzJkZXZlbG9wLnJ1L2pxdWVyeS9wcm92ZXJrYS1wb2xleS1zLXBvbW9zaHR5eXUtanF1ZXJ5Lmh0bWxcclxuXHRcdC8v0YLQsNC6INC20LUg0LzQvtC20L3QviDQv9C+0LTQutC70Y7Rh9C40YLRjCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC/0L7Qu9GPINC/0YDQvtCy0LXRgNC60Lgg0LjQtyBhZGRpdGlvbmFsLW1ldGhvZHMuanMuXHJcblx0XHQkKFwiI29mZmVyLWZvcm1cIikudmFsaWRhdGUoe1xyXG5cdFx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGVtYWlsOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHVzZXJOYW1lOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdG1pbmxlbmd0aDogWzZdXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHVybF9pbnB1dDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRub3JtYWxpemVyOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciB1cmwgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDaGVjayBpZiBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLyBvciBmdHA6Ly9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsICYmIHVybC5zdWJzdHIoMCwgNykgIT09IFwiaHR0cDovL1wiICYmIHVybC5zdWJzdHIoMCwgOCkgIT09IFwiaHR0cHM6Ly9cIiAmJiB1cmwuc3Vic3RyKDAsIDYpICE9PSBcImZ0cDovL1wiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoZW4gcHJlZml4IHdpdGggaHR0cDovL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmwgPSBcImh0dHA6Ly9cIiArIHVybDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmV0dXJuIHRoZSBuZXcgdXJsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVybDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWVzc2FnZXM6IHtcclxuXHRcdFx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC80YvQu9C+XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRlbWFpbDogXCLQn9C+0LvQtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGB0LjQvNCy0L7QuyAnQCcgXCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dXNlck5hbWU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC40LzRj1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWlubGVuZ3RoOiBcItCf0L7Qu9C1INC00L7QttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LJcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly/QrdC60YHQv9C10YDQtdC80LXQvdGC0YtcclxuXHRcdCQoXCIjZHJvcG1lbnVcIikuY2xpY2soZnVuY3Rpb24oKSB7IC8v0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQt9Cw0LrRgNGL0LLQsNC10YLRgdGPINC/0L4g0LrQu9C40LrRgyDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0LTRgNC+0L/QtNCw0YPQvSDQvNC10L3RjlxyXG5cdFx0XHRcdCQoXCIjc3VibWVudVwiKS5zbGlkZVRvZ2dsZSgxMDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly/QodC80LDRgNGCLdC80LXQvdGOKNC00YDQvtC/0LTQsNGD0L0g0LzQtdC90Y4pINGBINC/0L7QvNC+0YnRjNGOINC/0LvQsNCz0LjQvdCwIHNtYXJ0bWVudXNcclxuXHJcblx0XHQkKCcjbWFpbi1tZW51Jykuc21hcnRtZW51cygpO1xyXG5cdFx0LyrQn9CQ0KDQkCDQodCb0J7QkiDQniDQn9Cb0JDQk9CY0J3QkNClXHJcblx0XHTQlNGA0YPQs9C40LUg0L/Qu9Cw0LPQuNC90Ysg0LHQuNCx0LvQuNC+0YLQtdC60LggalF1ZXJ5INC00LvRjyDRg9C70YPRh9GI0LXQvdC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4XHJcblx0XHTQn9C70LDQs9C40L0galF1ZXJ5IFNtYXJ0TWVudXMg0L/RgNC+0YHRgiDQuCDRjdGE0YTQtdC60YLQuNCy0LXQvSwg0L7QtNC90LDQutC+INGB0YPRidC10YHRgtCy0YPQtdGCXHJcblx0XHTQvNC90L7QttC10YHRgtCy0L4g0LTRgNGD0LPQuNGFINC/0LvQsNCz0LjQvdC+0LIg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0YDQsNGB0YjQuNGA0LXQvdC90L7QuSDQvdCw0LLQuNCz0LDRhtC40LguXHJcblx0XHTigKIg0J/Qu9Cw0LPQuNC9IGpQYW5lbCAoanBhbmVsbWVudS5jb20pINGB0L7Qt9C00LDQtdGCINC80LXQvdGOINCyINGB0YLQuNC70LUg0L/QsNC90LXQu9C10LksXHJcblx0XHTQutC+0YLQvtGA0YvQtSDQstGL0LXQt9C20LDRjtGCINC/0YDQuCDRidC10LvRh9C60LUg0L/QviDQt9C90LDRh9C60YMuINCf0L7QtNC+0LHQvdCw0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPINC40YHQv9C+0LvRjNC30YPQtdGC0YHRj1xyXG5cdFx00L3QsCDRgdC10YDQstC40YHQsNGFIEZhY2Vib29rINC4IEdvb2dsZSwg0LAg0YLQsNC60LbQtSDQstC+INC80L3QvtCz0LjRhSDQv9GA0LjQu9C+0LbQtdC90LjRj9GFXHJcblx0XHTQtNC70Y8g0YHQvNCw0YDRgtGE0L7QvdC+0LIuXHJcblx0XHQtINCf0LvQsNCz0LjQvSBNdWx0aS1sZXZlbCBQdXNoIE1lbnUgKG11bHRpLWxldmVscHVzaC1tZW51Lm1ha2UucnMpIOKAlFxyXG5cdFx00Y3RgtC+INC10YnQtSDQvtC00L3QsCDRgdC40YHRgtC10LzQsCDQvNC10L3Rjiwg0LrQvtGC0L7RgNCw0Y8g0YDQsNGB0L/QvtC70LDQs9Cw0LXRgtGB0Y8g0L3QsCDQutGA0LDRjiDRjdC60YDQsNC90LAuXHJcblx0XHTQntC90LAg0L/RgNC10LTRg9GB0LzQsNGC0YDQuNCy0LDQtdGCINC80L3QvtC20LXRgdGC0LLQviDRg9GA0L7QstC90LXQuSDQvdCw0LLQuNCz0LDRhtC40LgsINC/0YDQtdC00YHRgtCw0LLQu9C10L3QvdGL0YVcclxuXHRcdNC90LXQsdC+0LvRjNGI0LjQvNC4INCy0LrQu9Cw0LTQutCw0LzQuCwg0LrQvtGC0L7RgNGL0LUg0L/QvtGB0LXRgtC40YLQtdC70Ywg0LzQvtC20LXRglxyXG5cdFx00L7RgtC60YDRi9Cy0LDRgtGMINC4INC30LDQutGA0YvQstCw0YLRjC4g0K3RgtC+INGF0L7RgNC+0YjQuNC5INGB0L/QvtGB0L7QsSDQtNC70Y8g0L7RgNCz0LDQvdC40LfQsNGG0LjQuFxyXG5cdFx00Lgg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQtNC+0YHRgtGD0L/QsCDQuiDQsdC+0LvRjNGI0L7QuSDQutC+0LvQu9C10LrRhtC40Lgg0YHRgdGL0LvQvtC6LlxyXG5cdFx00JXRgdC70Lgg0L3QuCDQvtC00LjQvSDQuNC3INGN0YLQuNGFINC/0LvQsNCz0LjQvdC+0LIg0L3QtSDQt9Cw0LjQvdGC0LXRgNC10YHQvtCy0LDQuyDQstCw0YEsINC+0LHRgNCw0YLQuNGC0LXRgdGMXHJcblx0XHTQuiDQsdC+0LvRjNGI0L7QvNGDINGB0L/QuNGB0LrRgywg0YHQvtGB0YLQvtGP0YnQtdC80YMg0LjQtyAxNSDQv9C70LDQs9C40L3QvtCyINC90LDQstC40LPQsNGG0LjQuCDQtNC70Y8g0LHQuNCx0LvQuNC+0YLQtdC60LhcclxuXHRcdGpRdWVyeSDQvdCwINGB0LDQudGC0LUgc3BlY2t5Ym95LmNvbS8yMDEzIC8wIDggLzAgMSAvMSA1LXJlc3BvbnNpdmVuYXZpZ2F0aW9uLVxyXG5cdFx0anF1ZXJ5cGx1Z2lucy8uKi9cclxuXHJcblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0pRVUVSWS1VSS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdC8v0JLRgdC1INCy0LjQtNC20LXRgtGLINC80L7QttC90L4g0YHQvNC+0YLRgNC10YLRjCDRgdC00LXRgdGMINC4INC40YUg0LTQtdC80L4sINC/0LvRjtGBINGB0YLRgNGD0LrRgtGD0YDQsCBodG1sIGh0dHA6Ly9qcXVlcnl1aS5jb21cclxuXHJcblx0XHQvLyDQlNCY0JDQm9Ce0JPQntCS0KvQlSDQntCa0J3QkFxyXG5cdFx0Ly9cdNCS0YvQt9C+0LIg0LTQuNCw0LvQvtCz0L7QstC+0LPQviDQvtC60L3QsCBqcXVlcnktdWkuINCf0L7QtNGA0L7QsdC90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC/0LvQsNCz0LjQvdCwINCyINC60L3QuNCz0LUganMg0YHRgtGALjQ0MC4gINCS0YHQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0YLRg9GCIGFwaS5qcXVlcnl1aS5jb20vZGlhbG9nXHJcblx0XHQvLyAkKCcjaGVsbG8nKS5kaWFsb2coKTtcclxuXHJcblx0XHQvL1x00JzQvtC20L3QviDQv9C10YDQtdC00LDQstCw0YLRjCDQu9C40YLQtdGA0LDQuyDQvtCx0YrQtdC60YLQsCDRgNC10LPRg9C70LjRgNGD0Y8g0YDQsNC30LvQuNGH0L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRiyDRgdGC0YAuNDQ1LCDQsiDQv9GA0LjQvNC10YDQtSDQstGL0LrQu9GO0YfQtdC90L4g0L/QtdGA0LXQvNC10YnQtdC90LjQtSDQuCDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC30LzQtdGA0LAg0L7QutC90LBcclxuXHRcdC8vICQoJyNoZWxsbycpLmRpYWxvZyh7XHJcblx0XHQvLyBcdGRyYWdnYWJsZTogZmFsc2UsXHJcblx0XHQvLyBcdHJlc2l6YWJsZTogZmFsc2UsXHJcblx0XHQvLyBcdHBvc2l0aW9uOiBbMTAwLDEwXS8v0YHRgtGALiA0NTgsINC/0L7QtNGA0L7QsdC90L4gYXBpLmpxdWVyeXVpLmNvbS9wb3NpdGlvblxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0Ly8g0JzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQvNC+0LvQsNC70YzQvdC+0LUg0L7QutC90L5cclxuXHRcdCQoJyNoZWxsbycpLmRpYWxvZyh7XHJcblx0XHRcdFx0bW9kYWw6IHRydWUsXHJcblx0XHRcdFx0YXV0b09wZW46IGZhbHNlLCAvL9C+0LrQvdC+INC90LUg0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdFx0c2hvdzogJ3NsaWRlRG93bicsXHJcblx0XHRcdFx0aGlkZToge1xyXG5cdFx0XHRcdFx0XHRlZmZlY3Q6ICdleHBsb2RlJyxcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDEwMDAsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAsXHJcblx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VJblF1YWQnXHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8g0JLRi9GB0LfQvtCyINC+0LrQvdCwINC90LAg0LrQu9C40Log0YHRgtGALiA0NTIsINC90LAg0YHRgtGALiA0NTMg0LrQsNC6INC30LDQutGA0YvRgtGMINC+0LrQvdC+INC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhSDRhNC+0YDQvNGLLlxyXG5cdFx0JChcIiNsaW5ja1wiKS5jbGljayhmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQkKCcjaGVsbG8nKS5kaWFsb2coJ29wZW4nKTsgLy/Qv9C10YDQtdC00LDQtdC8INCyINCy0LjQtNC20LXRgiDQvtGC0LrRgNGL0YLQuNC1INC+0LrQvdCwINC/0YDQuCDQutC70LjQutC1XHJcblx0XHRcdFx0Ly8gJCAoJyNoZWxsbycpLmRpYWxvZygnY2xvc2UnKTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHQvLyDQktCh0J/Qm9Cr0JLQkNCu0KnQmNCVINCf0J7QlNCh0JrQkNCX0JrQmDog0YHRgtGALiA0NjYo0YDQsNC30L3Ri9C1INGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC/0L7QtNGB0LrQsNC30L7Quikg0YHRgtGALiA0Njcg0LTQvtCx0LDQstC40YLRjCDRgtC10LMg0LIg0L/QvtC00YHQutCw0LfQutGDXHJcblx0XHQkKCdbdGl0bGVdJykudG9vbHRpcCh7XHJcblx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRoaWRlOiAnZXhwbG9kZScsXHJcblx0XHRcdFx0dHJhY2s6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCi0JDQkdCrINGB0YLRgC4gNDc1LCDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDQsiDRgtCw0LHRiyDQutC+0L3RgtC10L3RgtCwINC+0YLQtNC10LvRjNC90YvRhSDRgdGC0YDQsNC90LjRhiDQuNC70Lgg0L/RgNC+0YHRgtC+INC60L7QvdGC0LXQvdGC0LAg0YHRgtGALjQ4MFxyXG5cdFx0JCgnI3RhYmJlZHBhbmVsJykudGFicyh7XHJcblx0XHRcdFx0c2hvdzogJ2ZhZGVJbicsXHJcblx0XHRcdFx0aGlkZTogJ2ZhZGVPdXQnLFxyXG5cdFx0XHRcdGFjdGl2ZTogMCxcclxuXHRcdFx0XHRoZWlnaHRTdHlsZTogJ2F1dG8nLCAvL9C00LXQu9Cw0LXRgiDQvtC00LjQvdCw0LrQvtCy0YPRjiDQstGL0YHQvtGC0YMg0LLRgdC10YUg0YLQsNCx0L7QslxyXG5cdFx0XHRcdC8vIGV2ZW50OiAnbW91c2VvdmVyJywgLy/QsdGD0LTQtdGCINGA0LXQsNCz0LjRgNC+0LLQsNGC0Ywg0L3QtSDQvdCwINC60LvQuNC6INCwINC90LAg0L3QsNCy0LXQtNC10L3QuNC1INC80YvRiNC4LCDQvNC+0LbQvdC+INGG0LXQv9C70Y/RgtGMINC70Y7QsdC+0LUg0YHQvtCx0YvRgtC40LVcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vINCd0LDRhdC+0LTQuNGCINCy0YvQtNC10LvQtdC90L3QvtC1INGB0L7QtNC10YDQttC40LzQvtC1INC/0L4g0LDQudC00Lgg0L/QvtGB0LvQtSDRgdC+0LHRi9GC0LjRjyBsb2FkINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LrQvtC70LHQtdC6INGE0YPQvdC60YbQuNGPLFxyXG5cdFx0Ly8g0LIg0LTQsNC90L3QvtC8INC/0YDQuNC80LXRgNC1INCw0LnQtNC4ICN0YWIg0Lgg0LTQvtCx0LDQstC70Y/QtdGCINC10LPQviDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsiDRgtCw0LHQv9Cw0L3QtdC70YwuINGB0YLRgC40ODVcclxuXHRcdC8vICQoJyN0YWJiZWRwYW5lbCcpLnRhYnMoe1xyXG5cdFx0Ly8gXHRsb2FkOiBmdW5jdGlvbihldnQsIHVpKSB7XHJcblx0XHQvLyBcdFx0dmFyIG5ld0hUTUwgPVxyXG5cdFx0Ly8gXHRcdHVpLnBhbmVsLmZpbmQoJyN0YWInKS5odG1sKCk7XHJcblx0XHQvLyBcdFx0dWkucGFuZWwuaHRtbChuZXdIVE1MKTtcclxuXHRcdC8vIFx0XHR9XHJcblx0XHQvLyB9KTtcclxuXHJcblxyXG5cdFx0Ly8g0J/RgNC4INC/0LXRgNC10YXQvtC00LUg0L3QsCDQvtC00L3RgyDQuNC3INCy0LrQu9Cw0LTQvtC6INC4INC/0L7RgtC+0Lwg0YHQtNC10LvQsNGC0Ywg0YHRgdGL0LvQutGDINC90LAg0YHRgtGA0LDQvdC40YbRgyDRgtC+INCyINGB0YHRi9C70LrQtSDQsdGD0LTQtdGCINC+0YLQvtCx0YDQvtC20LXQvSDRgtCw0LEg0LrQvtGC0L7RgNGL0Lkg0LHRi9C7INCy0YvQsdGA0LDQvVxyXG5cdFx0Ly8gdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xyXG5cdFx0Ly8gXHRpZiAoaGFzaCkge1xyXG5cdFx0Ly8gXHQkKCcjdGFiYmVkcGFuZWwnKS50YWJzKCdsb2FkJywgaGFzaClcclxuXHRcdC8vIH1cclxuXHJcblx0XHQvL9CQ0JrQmtCe0KDQlNCY0J7QnVxyXG5cclxuXHRcdCQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbih7XHJcblx0XHRcdFx0YW5pbWF0ZTogNTAwLFxyXG5cdFx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXHJcblx0XHRcdFx0Ly/QuNC30LzQtdC90LXQvdC40LUg0LTQtdGE0L7Qu9GC0L3Ri9GFINC30L3QsNGH0LrQvtCyKGljb25zKSDQvdCwINC00YDRg9Cz0LjQtSDQuNC3INGB0L/RgNCw0LnRgtC+0LIg0LrQvtGC0L7RgNGL0LUg0L3QsNGF0L7QtNGP0YLRgdGPINCyIGltYWdlc1xyXG5cdFx0XHRcdGljb25zOiB7XHJcblx0XHRcdFx0XHRcdGhlYWRlcjogJ3VpLWljb24tY2lyY2xlLXBsdXMnLFxyXG5cdFx0XHRcdFx0XHRhY3RpdmVIZWFkZXI6ICd1aS1pY29uLWNpcmNsZS1taW51cydcclxuXHRcdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL2pRdWVyeSBVSSBEYXRlcGlja2VyICAgINGB0YLRgC41MDNcclxuXHRcdCQoXCIjZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKHtcclxuXHRcdFx0XHRtb250aE5hbWVzOiBbXCLQr9C90LLQsNGA0YxcIiwgXCLQpNC10LLRgNCw0LvRjFwiLCBcItCc0LDRgNGCXCIsIFwi0JDQv9GA0LXQu9GMXCIsIFwi0JzQsNC5XCIsIFwi0JjRjtC90YxcIiwgXCLQmNGO0LvRjFwiLCBcItCQ0LLQs9GD0YHRglwiLCBcItCh0LXQvdGC0Y/QsdGA0YxcIiwgXCLQntC60YLRj9Cx0YDRjFwiLCBcItCd0L7Rj9Cx0YDRjFwiLCBcItCU0LXQutCw0LHRgNGMXCJdLFxyXG5cdFx0XHRcdG1vbnRoTmFtZXNTaG9ydDogW1wi0K/QvdCyXCIsIFwi0KTQtdCyXCIsIFwi0JzQsNGAXCIsIFwi0JDQv9GAXCIsIFwi0JzQsNC5XCIsIFwi0JjRjtC9XCIsIFwi0JjRjtC7XCIsIFwi0JDQstCzXCIsIFwi0KHQtdC9XCIsIFwi0J7QutGCXCIsIFwi0J3QvtGPXCIsIFwi0JTQtdC6XCJdLFxyXG5cdFx0XHRcdGRheU5hbWVzTWluOiBbXCLQktGBXCIsIFwi0J/QvVwiLCBcItCS0YJcIiwgXCLQodGAXCIsIFwi0KfRglwiLCBcItCf0YJcIiwgXCLQodCxXCJdLFxyXG5cdFx0XHRcdGNoYW5nZU1vbnRoOiB0cnVlLFxyXG5cdFx0XHRcdGNoYW5nZVllYXI6IHRydWUsXHJcblx0XHRcdFx0ZGF0ZUZvcm1hdDogJ2RkLW1tLXl5JyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vU2VsZWN0bWVudSDRgdGC0YAuNTEwICBhcGkuanF1ZXJ5dWkuY29tL3NlbGVjdG1lbnUvXHJcblx0XHQkKFwiI3NwZWVkXCIpLnNlbGVjdG1lbnUoKTtcclxuXHJcblx0XHQkKFwiI2ZpbGVzXCIpLnNlbGVjdG1lbnUoKTtcclxuXHJcblx0XHQkKFwiI251bWJlclwiKVxyXG5cdFx0XHRcdC5zZWxlY3RtZW51KClcclxuXHRcdFx0XHQuc2VsZWN0bWVudShcIm1lbnVXaWRnZXRcIilcclxuXHRcdFx0XHQuYWRkQ2xhc3MoXCJvdmVyZmxvd1wiKTtcclxuXHJcblx0XHQkKFwiI3NhbHV0YXRpb25cIikuc2VsZWN0bWVudSh7XHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHQvLyB3aWR0aDogNTAwLFxyXG5cdFx0XHRcdGNoYW5nZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblx0XHRcdFx0XHRcdC8v0LzQvtC20L3QviDQvdCw0L/QuNGB0LDRgtGMINGE0YPQvdC60YbQuNGOINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LTQtdC70LDRgtGMINC00LXQudGB0YLQstC40LUg0L/RgNC4INCy0YvQsdC+0YDQtSDQvtC00L3QvtCz0L4g0LjQtyDQv9GD0L3QutGC0L7QsiDQvNC10L3RjijQv9GA0LjQvNC10YAg0YLQsNC60L7QuSDRhNGD0L3QutGG0LjQuCDRgdGC0YAuNTIwKVxyXG5cdFx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8v0JrQvdC+0L/QutC4INCy0LLQvtC00LAg0L7RgtC/0LDRgNCy0LrQuCDRhNC+0YDQvCjQuNC90L/Rg9GC0YssINC60L3QvtC/0LrQuCwg0YfQtdC60LHQvtC60YHRiynRgdGC0YAuNTIxLTUzMFxyXG5cclxuXHRcdC8v0JjQvdC/0YPRgtGLXHJcblx0XHQkKFwiLmJ1dHRvbnNcIikuYnV0dG9uKCk7XHJcblxyXG5cdFx0Ly/QpNC70LDQttC60LhcclxuXHRcdCQoXCIuY2hlY2tib2tzXCIpLmJ1dHRvbnNldCgpO1xyXG5cclxuXHRcdC8vcHJvZ3Jlc3NiYXJcclxuXHRcdCQoIFwiI3Byb2dyZXNzYmFyXCIgKS5wcm9ncmVzc2Jhcih7XHJcblx0XHRcdFx0XHR2YWx1ZTogMFxyXG5cdFx0XHRcdH0pLmNzcygnd2lkdGgnLCAnMjAwcHgnKTtcclxuXHJcblxyXG5cdFx0JCgnLmJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQgKCk7XHJcblx0XHRcdCQoIFwiI3Byb2dyZXNzYmFyXCIgKS5wcm9ncmVzc2Jhcih7XHJcblx0XHRcdFx0XHR2YWx1ZTogNTBcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8v0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/QviDRgdGC0YDQsNC90LjRhtC1INGB0YLRgC41NjktNTkwXHJcblx0XHQkKFwiI21haW4tbWVudVwiKS5kcmFnZ2FibGUoe1xyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0Ly9heGlzOiAneCcsLy/Qv9C10YDQtdC00LLQuNC20LXQvdC40LUg0YLQvtC70YzQutC+INC/0L4g0L7RgdC4INGFXHJcblx0XHRcdC8vY2FuY2VsOiAnbGknLC8v0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINC70Lgg0L/QtdGA0LXQtNCy0LjQttC10L3QuNGPINC90LUg0L/RgNC+0LjQt9C+0LnQtNC10YIo0LzQvtC20L3QviDRh9Cw0YHRgtC40YfQvdC+INC+0YLQutC70Y7Rh9Cw0YLRjCDRjdC70LXQvNC10L3RgtGLINCy0L3Rg9GC0YDQuCDQv9C10YDQtdC00LLQuNCz0LDQtdC80L7Qs9C+INC+0LrQvdCwKVxyXG5cdFx0XHQvL2hhbmRsZTogJ2xpJywvL9C90LDQvtCx0L7RgNC+0YIg0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINC70Lgg0L/QtdGA0LXQvNC10YnQtdC90LjQtSDQv9GA0L7QuNC30L7QudC00LXRgiwg0LAg0LXRgdC70Lgg0L3QsNCy0LXRgdGC0Lgg0L3QsCDQtNGA0YPQs9GD0Y4g0L7QsdC70LDRgdGC0Ywg0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQvdC1INCx0YPQtNC10YJcclxuXHRcdFx0Y29udGFpbm1lbnQ6ICcuaG9sZGVyJywvL9C/0LXRgNC10LzQtdGJ0LXQvdC40LUg0YLQvtC70YzQutC+INCyINC/0YDQtdC00LXQu9Cw0YUg0LrQvtC90YLQtdC50L3QtdGA0LAg0LjQu9C4INC30LDQtNCw0YLRjCDQt9C90LDRh9C10L3QuNC1ICdwYXJlbnQnINGD0LrQsNC30LDQvdC40LUg0L3QtSDRj9Cy0L3QviDQvdCwINGA0L7QtNC40YLQtdC70Y9cclxuXHRcdFx0aGVscGVyOiAnY2xvbmUnLC8v0L3QtSDQv9C10YDQtdC80LXRidCw0LXRgiDRgdCw0Lwg0L7QsdGK0LXQutGCLCDQsCDQtNC10LvQsNC10YIg0LXQs9C+INC60LvQvtC9INC4INC10LPQviDQv9C10YDQtdC80LXRidCw0LXRglxyXG5cdFx0XHRzdGFydDogZnVuY3Rpb24oZXZlbnQpey8v0YTQvdGD0LrRhtC40Y8g0L3QsCDRgdC+0LHRi9GC0LjRjyjRgdC+0LHRi9GC0LjQtSDRgdGC0LDRgNGCKVxyXG5cdFx0XHRcdCQoJyNoZWxsbycpLmRpYWxvZygnb3BlbicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdG9wOiBmdW5jdGlvbihldmVudCl7Ly9zdG9wIC0g0YHQvtCx0YvRgtC40LUsIGZ1bmN0aW9uKCk7IC0g0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y9cclxuXHRcdFx0XHQkKCcjaGVsbG8nKS5kaWFsb2coJ2Nsb3NlJyk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRcdC8vZHJhZ2dhYmxlLCBkcm9wcGFibGUg0J3QsCDQvtGB0L3QvtCy0LUg0LTQstGD0YUg0Y3RgtC40YUg0L/Qu9Cw0LPQuNC90L7QsiDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINC40L3RgtC10YDQsNC60YLQuNCy0L3Rg9GOINC60L7RgNC30LjQvdGDINC/0L7QutGD0L/QvtC6INGB0YLRgC41ODQsINC/0YDQsNC60YLQuNC60LAg0YHRgtGALjU5NlxyXG5cclxuXHRcdCQoIFwiI2RyYWdnYWJsZVwiICkuZHJhZ2dhYmxlKCk7XHJcblx0XHQkKCBcIiNkcm9wcGFibGVcIiApLmRyb3BwYWJsZSh7XHJcblx0XHRcdGhvdmVyQ2xhc3M6ICdvcGVuVHJhc2hjYW4nLFx0XHQvL9C60LvQsNGB0YEg0L/RgNC4INC90LDQstC10LTQtdC90Lgg0L3QsCDQvtCx0YrQtdC60YJcclxuXHRcdFx0YWN0aXZlQ2xhc3M6ICdoaWdobGlnaHQnLFx0XHRcdC8v0LrQu9Cw0YHRgSDQv9GA0Lgg0L/QtdGA0LXQvNC10YnQtdC90LjQuCDQvtCx0YrQtdC60YLQsFxyXG5cdFx0XHR0b2xlcmFuY2U6ICdmaXQnLFx0XHRcdFx0XHRcdFx0Ly/Qv9C10YDQtdGC0LDRgdC60LjQstCw0LXQvNGL0Lkg0Y3Qu9C10LzQtdC90YIg0LTQvtC70LbQtdC9INC/0L7Qu9C90L7RgdGC0YzRjiDQvdCw0YXQvtC00LjRgtGM0YHRj9CyINC/0YDQtdC00LXQu9Cw0YUg0L7QsdC70LDRgdGC0Lgg0LHRgNC+0YHQsNC90LjRjyDQtNGA0YPQs9C40LUg0L/QsNGA0LDQvNC10YLRgNGLINGB0YLRgC41ODg7XHJcblx0XHRcdGRyb3A6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7Ly9kcm9wIC0g0YHQvtCx0YvRgtC40LUsIGZ1bmN0aW9uKCk7IC0g0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8sINC80L7QttC90L4g0YHRjtC00LAg0LLQv9C40YHQsNGC0YwgZGVhY3RpdmF0ZSDQsNC90LDQu9C+0LMg0YHQvtCx0YvRgtC40Y4gZHJvcFxyXG5cdFx0XHRcdCQoIHRoaXMgKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCBcInVpLXN0YXRlLWhpZ2hsaWdodFwiIClcclxuXHRcdFx0XHRcdC5maW5kKCBcInBcIiApXHJcblx0XHRcdFx0XHQudGV4dCggXCLQotC+0LLQsNGAINC00L7QsdCw0LLQu9C10L1cIiApXHJcblx0XHRcdFx0XHQuY3NzKCdjb2xvcicsICcjNmJkYTVlJyk7XHJcblx0XHRcdFx0XHQvLyB1aS5oZWxwZXIuaGlkZSgnZXhwbG9kZScpOyAvL9GN0YLQviDRgdGB0YvQu9C60LAg0L3QsCDQv9C10YDQtdGC0LDRgdC60LjQstCw0LXQvNGL0Lkg0L7QsdGK0LXQutGCXHJcblx0XHRcdH0sXHJcblx0XHRcdGFjdGl2YXRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cdFx0XHRcdCQoIHRoaXMgKVxyXG5cdFx0XHRcdFx0LmZpbmQoIFwicFwiIClcclxuXHRcdFx0XHRcdC50ZXh0KCBcItCi0LDRidC40YLQtSDRgdGO0LTQsFwiICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG92ZXI6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0JCggdGhpcyApXHJcblx0XHRcdFx0XHQvLyAuY3NzKHtib3JkZXI6ICcxMHB4IHNvbGlkIGdyZWVuJ30pINC80L7QttC90L4g0Lgg0YLQsNC6INC30LDQtNCw0YLRjCDRhtCy0LXRgiDQstC80LXRgdGC0L4g0L/QsNGA0LDQvNC10YLRgNCwIGhvdmVyQ2xhc3M6ICdvcGVuVHJhc2hjYW4nXHJcblx0XHRcdFx0XHQuZmluZCggXCJwXCIgKVxyXG5cdFx0XHRcdFx0LnRleHQoIFwi0JHRgNC+0YHQsNC50YLQtSEhIVwiICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG91dDogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuXHRcdFx0XHQkKCB0aGlzIClcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggXCJ1aS1zdGF0ZS1oaWdobGlnaHRcIiApXHJcblx0XHRcdFx0XHQuZmluZCggXCJwXCIgKVxyXG5cdFx0XHRcdFx0Lmh0bWwoIFwi0J3RgyDRh9GC0L4g0LfQsCDQu9GO0LTQuCA8YnI+XCIpXHJcblx0XHRcdFx0XHQuYXBwZW5kKFwiPGRpdiBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjUwcHgnPjooPC9kaXY+XCIpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly/Qn9C+0LTRgNC+0LHQvdC+INC+0LHRitC10LrRgiB1aSDRgdGC0YAuNjEzXHJcblx0XHRcdFx0XHQvL0FqYXgg0YHRgtGALjY0MlxyXG5cdFx0XHRcdFx0Ly/QkiDQtNCw0L3QvdC+0Lwg0L/RgNC40LzQtdGA0LUg0LjQtNC10YIg0L/QvtC00LPRgNGD0LfQutCwINCw0Y/QutGB0L7QvCDRiNGC0LzQuyDRgdGC0YDQsNC90LjRhiDQsiDQutC+0L3RgtC10LnQvdC10YAg0YEg0LrQu9Cw0YHRgdC+0LwgYWpheFxyXG5cdFx0XHRcdFx0Ly/Ql9Cw0L/QuNGB0Ywg0L3QtSDRgdC+0LLRgdC10Lwg0L/RgNCw0LLQuNC70YzQvdCw0Y9cclxuXHRcdFx0JCgnLmFqYXgnKS5sb2FkKCdhamF4LWxvYWQtcGFnZS5odG1sJyk7Ly/RgdGC0YAuNjQ1XHJcblxyXG5cdFx0XHQvLyAkKCcubGlzdCcpLm9uKCdjbGljaycsICcubmV3cycsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHQvLyBcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQvLyBcdCQoJy5hamF4JykubG9hZCgnYWpheC1sb2FkLXBhZ2UxLmh0bWwnKVxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdC8vICQoJy5saXN0Jykub24oJ2NsaWNrJywgJy5ibG9nJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdC8vIFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdC8vIFx0JCgnLmFqYXgnKS5sb2FkKCdhamF4LWxvYWQtcGFnZTIuaHRtbCcpXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Ly8gJCgnLmxpc3QnKS5vbignY2xpY2snLCAnLmZvcnVtJywgZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdC8vIFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdC8vIFx0JCgnLmFqYXgnKS5sb2FkKCdhamF4LWxvYWQtcGFnZTMuaHRtbCcpXHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHQvLyBcdFx0Ly/QnNC+0LbQvdC+INCy0YvQsdGA0LDRgtGMINC70Y7QsdC+0Lkg0YHQtdC70LXQutGC0L7RgCDRgdC+INGB0YLRgNCw0L3QuNGG0Ysg0L/QvtC00LrQu9GO0YfQsNC10LzQvtC5LCDQsCDRgtCw0LrQttC1INCyINGC0L7QvCDRh9C40YHQu9C1INC4INGBINC40L3QtNC10LrRgdC90L7QuSDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdC8vICQoJy5saXN0Jykub24oJ2NsaWNrJywgJy5vdGhlcicsIGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHQvLyBcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQvLyBcdCQoJy5hamF4JykubG9hZCgnYWpheC1sb2FkLXBhZ2UuaHRtbCBoMicpLy/QstGL0LHRgNCw0Lsg0LfQsNCz0L7Qu9C+0LLQutC4IGgyXHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0Ly/Qn9GA0LDQstC40LvRjNC90LDRjyDQt9Cw0L/QuNGB0YxcclxuXHRcdFx0JCgnLmxpc3QgYScpLmNsaWNrKGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0XHQkKCcuYWpheCcpLmxvYWQodXJsKTtcclxuXHRcdFx0XHQvLyAkKCcuYWpheCcpLmxvYWQodXJsICsgXCIgaDJcIik7INC80L7QttC90L4g0LLRi9Cx0YDQsNGC0Ywg0YLQvtC70YzQutC+INC30LDQs9C+0LvQvtCy0LrQuCBoMiDQvdCwINC30LDQs9GA0YPQttCw0LXQvNGL0YUg0YHRgtGA0LDQvdC40YbQsNGFINC40LvQuCDQu9GO0LHQvtC5INC00YDRg9Cz0L7QuSDRgdC10LvQtdC60YLQvtGAXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vR0VULCBQT1NUINGB0YLRgC4gNjUzXHJcblxyXG5cdFx0XHQvLyQucG9zdCh1cmwsIGRhdGEsIGNhbGxiYWNrKTtcclxuXHJcblx0XHRcdC8vJC5nZXQodXJsLCBkYXRhLCBjYWxsYmFjayk7IFxyXG5cclxuXHRcdFx0Ly8kLmdldEpTT04odXJsLCBkYXRhLCBjYWxsYmFjayk7IGdldEpTT04g0LzQtdGC0L7QtCDQv9GA0LXQtNC90LDQt9C90LDRh9C10L0g0LTQu9GPINC+0LHRgNCw0LHQvtGC0LrQuCDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAg0LIg0YTRgNC80LDRgtC1IEpTT05cclxuXHJcblx0XHRcdC8vKiB1cmwgLSDQsNC00YDRgdGBINC+0LHRgNCw0LHQvtGC0YfQuNC60LBcclxuXHRcdFx0Ly8qIGRhdGEgLSDRjdGC0L4g0L/QtdGA0LXQvNC10L3QvdCw0Y8g0YEg0LfQvdCw0YfQtdC90LjRj9C80Lgg0LrQvtGC0L7RgNGL0LUg0L7RgtC/0YDQsNCy0LvRj9GO0YLRgdGPINGB0LXRgNCy0LXRgNGDINC90LAg0L7QsdGA0LDQsdC+0YLQutGDXHJcblx0XHRcdC8vKiBjYWxsYmFjay3RhNGD0L3QutGG0LjRjyDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/QvtC70YPRh9C10L3QvdGL0Lkg0L7RgtCy0LXRgiDRgSDRgdC10YDQstC10YDQsFxyXG5cdFx0XHQvLyoq0L/QvtC70YPRh9C10L3QvdGL0Lkg0L7RgtCy0LXRgiDRgtCw0Log0LbQtSDQt9Cw0L/QuNGB0YvQstCw0LXRgtGB0Y8g0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4gZGF0YSjQvNC+0LbQvdC+INC90LDQt9Cy0LDRgtGMINC40L3QsNGH0LUpINC4INC/0LXRgNC10LTQsNC10YLRgdGPINCyINC60LDRh9C10YHRgtCy0LUg0L/QtdGA0LLQvtCz0L4g0LDRgNCz0YPQvNC10L3RgtCwIGNhbGxiYWNrLdGE0YPQvdC60YbQuNC4XHJcblxyXG5cclxuXHRcdFx0Ly9jYWxsYmFjayDRhNGD0L3QutGG0LjRjyDQtdC1INCy0LjQtCDRgdGC0YAuIDY2MlxyXG5cdFx0XHQvL9GE0L7RgNC80LAg0YHRgtGALjY2OFxyXG5cdFx0JCgnI2xvZ2luJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpOyAvL3NlcmlhbGl6ZSDRgdC+0LHQuNGA0LDQtdGCINCy0LLQtdC00LXQvdC90YvQtSDQtNCw0L3QvdGL0LUg0LjQtyDRhNC+0YDQvNGLINCyINCy0LjQtNC1INC40LzRjzog0LfQvdCw0YfQtdC90LjQtSh1c2VybmFtZT1ib29tJnBhc3N3b3JkPTU1NTUpXHJcblx0XHRcdFx0JC5wb3N0KCdsb2dpbi5waHAnLCBmb3JtRGF0YSwgcHJvY2Vzc0RhdGEpLmVycm9yKCfQvtC5Jyk7XHJcblx0XHRcdFx0ZnVuY3Rpb24gcHJvY2Vzc0RhdGEocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCA9PT0gJ3Bhc3MnKTtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gJ3Bhc3MnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKCcubWFpbicpLmh0bWwoJzxwPtCS0Ysg0LDQstGC0L7RgNC40LfQvtCy0LDQvdGLITwvcD4nKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkKCcjZmFpbCcpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQoJyNmb3Jtd3JhcHBlcicpLnByZXBlbmQoJzxwIGlkPVwiZmFpbFwiPtCd0LXQutC+0YDRgNC10LrRgtC90LDRjyAg0LjQvdGE0L7RgNC80LDRhtC40Y8uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC10YnQtSDRgNCw0Lc8L3A+Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IC8vIGVuZCBwcm9jZXNzRGF0YVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pOyAvLyBlbmQgc3VibWl0XHJcblxyXG5cclxuXHJcblx0XHRcdC8v0J7QsdGA0LDQsdC+0YLQutCwINCyINGG0LjQutC70LUgZWFjaCDQv9C+0LvRg9GH0LXQvdC90YvRhSDQtNCw0L3QvdGL0YUg0L7RgiDRgdC10YDQstC10YDQsCDQsiDRhNC+0YDQvNCw0YLQtSBKU09OKNC00LDQvdC90YvQtSDQv9C+0LvRg9GH0LXQvdGLINGBINCy0L3QtdGI0L3QtdCz0L4g0YHQtdGA0LLQtdGA0LApXHJcblx0XHRcdC8v0KEg0LLQvdC10YjQvdC40YUg0YHQtdGA0LLQtdGA0L7QvCDQv9C+0LvRg9GH0LjRgtGMINC00LDQvdC90YvQtSDQsiDRhNC+0YDQvNCw0YLQtSBKU09OINC90LXQstC+0LfQvNC+0LbQvdC+INC/0L4g0LHQtdC30L7Qv9Cw0YHRgtC90L7RgdGC0LgsINC90L4g0LjRgdC/0L7Qu9GM0LfRg9GPINGB0L/QvtGB0L7QsSBKU09OUCDRjdGC0L4g0LLQvtC30LzQvtC20L3Qvi5cclxuXHRcdFx0Ly8qKkpTT05QIC0g0YHQv9C+0YHQvtCxINC/0L7Qu9GD0YfQtdC90LjRjyDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAsINC40YHQv9C+0LvRjNC30YPRjtGJ0LjQuSBKU09OINCyINC60LDRh9C10YHRgtCy0LUg0YHQv9C+0YHQvtCx0LAg0LrQvtC00LjRgNC+0LLQsNC90LjRj1xyXG5cdFx0XHQvLyrQn9GA0LjQvNC10YA6INGE0YDQsNCz0LzQtdGC0L0g0LIg0L/QtdGA0LXQvNC10L3QvdC+0LkgVVJMIC0gP2pzb25jYWxsYmFjaz0/INC00LDQtdGCINC60L7QvNCw0L3QtNGDINGB0LXRgNCy0LXRgNGDINC/0LXRgNC10LTQsNGC0Ywg0LTQsNC90L3Ri9C1INGB0L/QvtGB0L7QsdC+0LwgSlNPTlAuXHJcblx0XHR2YXIgVVJMID0gXCJodHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL2ZlZWRzL3Bob3Rvc19wdWJsaWMuZ25lP2pzb25jYWxsYmFjaz0/XCI7XHJcblx0XHR2YXIgc2VhcmNoSW5mbyA9IHtcclxuXHRcdFx0Ly8gY2hhbmdlIHRoaXMgSUQgdG8gYW5vdGhlciBmbGlja3IgSUQgKGxpa2UgeW91ciBvd24gaWYgeW91IGhhdmUgb25lKVxyXG5cdFx0XHRpZCA6IFwiMjUwNTM4MzVATjAzXCIsXHJcblx0XHRcdGZvcm1hdCA6IFwianNvblwiXHJcblx0XHR9O1xyXG5cclxuXHRcdCQuZ2V0SlNPTihVUkwsc2VhcmNoSW5mbyxmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdFx0XHR2YXIgcGhvdG9IVE1MID0gJyc7XHJcblxyXG5cdFx0XHQvL9CQ0YDQs9GD0LzQtdC90YLRiyAoaSxwaG90bykg0LIg0LDQvdC+0L3QuNC80L3QvtC5INGE0YPQvdC60YbQuNC4INC80LXRgtC+0LTQsCBlYWNoINGA0LDQsdC+0YLQsNGO0YIg0YEg0LzQsNGB0YHQuNCy0L7QvCDQvtCx0YrQtdC60YLQvtCyIGRhdGEuaXRlbXNcclxuXHRcdFx0Ly/Rj9Cy0LvRj9GO0YIg0YHQvtCx0L7QuSDQv9C10YDQtdC80LXQvdC90YvQtSBpINGN0YLQviDQuNC90LTQtdC60YEg0L7QsdGK0LXQutGC0LAg0LIg0YbQuNC60LvQtSwg0LAgcGhvdG8g0Y3RgtC+INGB0LDQvCDQvtCx0YrQtdC60YIuXHJcblx0XHRcdCQuZWFjaChkYXRhLml0ZW1zLGZ1bmN0aW9uKGkscGhvdG8pIHtcclxuXHRcdFx0XHRwaG90b0hUTUwgKz0gJzxzcGFuIGNsYXNzPVwiaW1hZ2VcIj4nO1xyXG5cdFx0XHRcdHBob3RvSFRNTCArPSAnPGEgaHJlZj1cIicgKyBwaG90by5saW5rICsgJ1wiPic7XHJcblx0XHRcdFx0cGhvdG9IVE1MICs9ICc8aW1nIHNyYz1cIicgKyBwaG90by5tZWRpYS5tLnJlcGxhY2UoJ19tJywnX3MnKSArICdcIj48L2E+PC9zcGFuPic7XHJcblx0XHRcdH0pOyAvLyBlbmQgZWFjaFxyXG5cdFx0XHQkKCcjcGhvdG9zJykuYXBwZW5kKHBob3RvSFRNTCk7XHJcblx0XHR9KTsgLy8gZW5kIGdldCBKU09OXHJcblxyXG5cclxuXHRcdFx0Ly/Qm9C+0LrQsNC70YzQvdC+0LUg0Lgg0YHQtdGA0LLQtdGA0L3QvtC1INGF0YDQsNC90LXQvdC40LUg0LTQsNC90L3Ri9GFINGB0YLRgC4gNzI1XHJcblxyXG5cdFx0XHQvL9Ck0YPQvdC60YbQuNC4INC+0LHRhdC+0LTQsCDQtNC10YDQtdCy0LAgRE9NINGB0YLRgC43NDIo0YDQsNCx0L7RgtCwINGBINCy0YvQsdC+0YDQutC+0Lkg0YHQtdC70LXQutGC0L7RgNCwIGpxdWVyeSDQstC90YPRgtGA0Lgg0YTRg9C90LrRhtC40Lgg0YHQvtCx0YvRgtC40Y8pLlxyXG5cclxuXHRcdFx0Ly8gYWxlcnQoJCgpLmpxdWVyeSk7INGD0LfQvdCw0YLRjCDQstC10YDRgdC40Y4ganF1ZXJ5XHJcblxyXG5cdFx0XHQvL9C80LXRgtC+0LQgc2xpY2Ug0LLRi9GA0LXQt9Cw0YLRjCDRh9Cw0YHRgtGMINGB0YLRgNC+0LrQuC5cclxuXHRcdFx0LypcclxuXHRcdFx0dmFyICRzZWxlY3RvciA9ICQoJy5ob2xkZXIgaDEnKSxcclxuXHRcdFx0XHRcdHRlc3QgPSAkc2VsZWN0b3IudGV4dCgpLFxyXG5cdFx0XHRcdFx0cmV6dWx0ID0gdGVzdC5zbGljZSgxMCk7XHJcblxyXG5cdFx0XHQkc2VsZWN0b3IudGV4dChyZXp1bHQpO1xyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly/QoNCV0JPQo9Cb0K/QoNCd0KvQlSDQktCr0KDQkNCW0JXQndCY0K8g0YHRgtGALjc2NlxyXG5cclxuXHRcdFx0dmFyIHNlbnRlbmNlID0gJ0FwcmlsIGlzIHRoZSBjcnVlbGVzdCBtb250aC4nO1xyXG5cdFx0XHR2YXIgYXByTWF0Y2ggPSAvQXByKGlsKT9cXGIvO1xyXG5cdFx0XHQvL9GE0YPQvdC60YbQuNGPIHNlYXJjaCDQv9GA0L7QstC10YDRj9C10YIg0L3QsNC70LjRh9C40LUg0LfQsNC00LDQvdC90L7QuSDRgdGC0YDQvtC60Lgg0LIg0L/QtdGA0LXQvNC10L3QvdC+0Lkg0YDQtdCz0YPQu9GP0YDQvdC+0LPQviDQstGL0YDQsNC20LXQvdC40Y8g0LXRgdC70LhcclxuXHRcdFx0Ly/QvdCw0YXQvtC00LjRgiDQstC+0LfQstGA0LDRidCw0LXRgiDQuNC90LTQtdC60YEg0L/QtdGA0LLQvtCz0L4g0YHQuNC80LLQvtC70LAg0YHRgtGA0L7QutC4INC10YHQu9C4INC90LXRgiDRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCIC0xXHJcblx0XHRcdGlmIChzZW50ZW5jZS5zZWFyY2goYXByTWF0Y2gpICE9IC0xKSB7XHJcblx0XHRcdC8vINC90LDQudC00LXQvdCwINGB0YLRgNC+0LrQsCBBcHIg0LjQu9C4IEFwcmlsXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdC8v0L3QtSDQvdCw0LnQtNC10L3QvlxyXG5cdFx0XHR9XHJcblx0XHRcdC8v0L/QvtC40YHQuiDQsiDRgdC+0LTQtdGA0LbQuNC80L7QvCDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0YvRgNCw0LbQtdC90LjRjyDRgdGC0YAuNzc5XHJcblxyXG5cdFx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3AgOiAkKFwiLmJsb2NrMVwiKS5vZmZzZXQoKS50b3BcclxuXHRcdFx0fSwgMTAwKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHR9KGpRdWVyeSkpO1xyXG5cclxufSk7XHJcbiIsInZhciBIUCA9IHtcclxuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQOyJdfQ==
