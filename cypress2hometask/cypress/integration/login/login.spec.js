/* eslint-disable no-undef */

import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';





describe('adminPage', () => {
      it('Checks the main admin page content', () => {
            cy.visit('http://qamid.tmweb.ru/admin')
            cy.login('qamid@qamid.ru', 'qamid')
            cy.get('h2.conf-step__title').contains('Управление залами')
      })


      it('should check new movie adding', () => { //a failing test
            cy.visit('http://qamid.tmweb.ru/admin/');
            cy.login('qamid@qamid.ru', 'qamid');
            cy.wait(500);

            const movies = require("../../fixtures/niewMovies.json")
            movies.forEach(movie => {
                  movie.hallTitle;
                  movie.movie;
                  movie.price;

                  cy.get('button.conf-step__button.conf-step__button-accent.button__add-hall').click()
                  cy.wait(500)
                  cy.get('input.conf-step__input').eq(0).type(movie.hallTitle)
                  cy.get('input[data-event="hall_add"]').click()
                  cy.wait(1000)
                  cy.get('input.conf-step__radio').eq(9).click().click()
                  cy.wait(800)
                  cy.get('input.conf-step__input').eq(2).clear().type(movie.price)

                  cy.get('input.conf-step__button.conf-step__button-accent').eq(1).click()
                  cy.get('button.conf-step__button.conf-step__button-accent.button__add-movie').click()

                  cy.get('input[name="name"]').type(movie.movie, {
                        force: true
                  })
                  cy.get('input[type="text"]').eq(1).type('200', {
                        force: true
                  })

                  cy.get('textarea.conf-step__input').type('BestMovie', {
                        force: true
                  })
                  cy.get('input[type="text"]').eq(2).type('Russia', {
                        force: true
                  })

                  cy.get('input[value="Загрузить постер"]').click().attachFile('poster.png');
                  cy.get('input[value="Добавить фильм"]').click()


            })
      })
})


describe('another test without failing', () => {
      it('Checks manager can create a hall with session price. ', () => { //failing test

            cy.visit('http://qamid.tmweb.ru/admin/')
            cy.login('qamid@qamid.ru', 'qamid')
            cy.wait(500)
            const movies = require("../../fixtures/niewMovies.json")
            movies.forEach(movie => {
                  movie.hallTitle;
                  movie.movie;
                  movie.price;

                  cy.get('button.conf-step__button.conf-step__button-accent.button__add-hall').click()
                  cy.wait(500)
                  cy.get('input.conf-step__input').eq(0).type(movie.hallTitle)
                  cy.get('input.conf-step__button.conf-step__button-accent').eq(0).click()
                  cy.wait(1000)
                  cy.get('input.conf-step__radio').eq(9).click().click()
                  cy.wait(800)
                  cy.get('input.conf-step__input').eq(2).clear().type(movie.price)

                  cy.get('h3.conf-step__movie-title').eq(1).drag('div.conf-step__seances-timeline', {
                        smooth: true
                  }).eq(2)
                  cy.get('input[type="time"]').click()
                  cy.get('input[data-event="seance_add"]').click()



            })
      })
      it('Checks user can go to a new movie session', () => { //positive test based on manually created movie
            cy.visit('http://qamid.tmweb.ru/client/index.php')
            cy.get('span.page-nav__day-week').eq(4).click()
            cy.get('a.movie-seances__time').eq(0).click()
            cy.get('span.buying-scheme__chair.buying-scheme__chair_standart').eq(25).click()
            cy.get('button.acceptin-button').click()
            cy.get('h2.ticket__check-title').contains('Вы выбрали билеты:')


      })
})