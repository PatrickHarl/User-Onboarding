import React from 'react'

const url='http://localhost:3000/'
const name = 'Patrick'
const email = 'hello@gmail.com'
const password = 'password'
const role1 = 'engineer'
const role2 = 'data scientist'
const role3 = 'ux designer'

describe('Users Form', () => {

    it('Can navigate to the site', () => {


        cy.visit(url)
        


    })

    

    it('Can check for form validation if Name input is left empty', () => {

        
        cy.get('input[name="name"]')
        .should('have.value', '')
        .get('[cytest="cyErrorName"]')
        .contains('Name must be at least 2 characters long!')

    })

    it('Can check for form validation if Email input is left empty', () => {



        cy.get('input[name="email"]')
        .should('have.value', '')
        .get('[cytest="cyErrorEmail"]')
        .contains('Email required')



    })

    it('Can check for form validation if Password input is left empty', () => {

        cy.get('input[name="password"]')
        .should('have.value', '')
        .get('[cytest="cyErrorPassword"]')
        .contains('Password must be at least 8 characters long!')

    })

    it('Can check for form validation if Role input is left empty', () => {


        cy.get('select[name="role"]')
        .should('have.value', 'choose')
        .get('[cytest="cyErrorRole"]')
        .contains('You must choose a role!')


    })
    
    it('Can check for form validation if ToSAgree input is left empty', () => {


        cy.get('input[name="tosAgree"]')
        .should('not.have.checked')
        .get('[cytest="cyErrorTosAgree"]')
        .contains('You must agree to the terms of service!')



    })
       
    it('Can type a name into Name input', () => {


        cy.get('input[name="name"]')
        .type(name)
        .should('have.value', name)
        
    
    
    
    })
    

    it('Can type a email into Email input', () => {


        cy.get('input[name="email"]')
        .type(email)
        
    
    })

    it('Can type a password into Password input', () => {


        cy.get('input[name="password"]')
        .type(password)
        
    
    })

    it('Can choose a role from Role input', () => {


        cy.get('select[name="role"]')
        .select(role1)
        .should('have.value', role1)

        cy.get('select[name="role"]')
        .select(role2)
        .should('have.value', role2)

        cy.get('select[name="role"]')
        .select(role3)
        .should('have.value', role3)
        
    
    })

    it('Can check the Terms of Service box', () => {


        cy.get('input[name="tosAgree"]')
        .check()
        .should('have.checked')
        
    
    })

    it('Can check for any current form validation errors before submitting', () => {


        cy.get('[cytest="cyErrorName"]')
        .contains('Name must be at least 2 characters long!')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorName"]')
        .contains('Name is required')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorEmail"]')
        .contains('Not a valid email address!')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorEmail"]')
        .contains('Email required')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorPassword"]')
        .contains('Password must be at least 8 characters long!')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorPassword"]')
        .contains('Password required')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorRole"]')
        .contains('You must choose a role!')
        .should('not.exist')
    
        cy.get('[cytest="cyErrorTosAgree"]')
        .contains('You must agree to the terms of service!')
        .should('not.exist')



    })

   

    it('Can submit form data', () => {


        cy.contains('Submit')
        .click()

        cy.get('pre')
        .contains(name)
        .contains(email)
        .contains(password)
        .contains(role3)
        
        
    
    })

    





})

