import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Locator;

    constructor(page: Page) {

        super(page);

        this.txtUsername = page.locator('input[name="username"]');

        this.txtPassword = page.locator('input[name="password"]');

        this.btnLogin = page.locator('input[value="Log In"]');
    }

    async open() {

        await this.page.goto('/');

    }

    async login(username: string, password: string) {

        await this.fill(this.txtUsername, username);

        await this.fill(this.txtPassword, password);

        await this.click(this.btnLogin);

        await this.page.waitForLoadState('networkidle');

    }

}