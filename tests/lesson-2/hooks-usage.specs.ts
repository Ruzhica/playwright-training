import { test, expect } from '@playwright/test';
test.describe("Test Suite for Update User tests", () =>{

    test.beforeEach ("Navigate to Login page", async({page}) => {
        await page.goto ("/");
        //
    })


    test.describe("Test Suite for Update User tests checking the username", () =>{
        test('test user with valid username', async ({ page }) => {


        });


        test('test user with invalid username', async ({ page }) => {

        });

        test('test user with empty username', async ({ page }) => {

        });


    });

    test.describe("Test Suite for Update User tests checking the password", () =>{

        test('test user with alloed password', async ({ page }) => {


        });


        test('test user with invalid password', async ({ page }) => {

        });

        test('test user with empty password', async ({ page }) => {

        });

    });

    test.afterEach("tear down for our test", async() => {

    });

});