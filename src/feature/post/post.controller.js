import {
    CreatePostService,
    DeletePostService,
    GetPostService,
    GetPostsService,
    UpdatePostService
} from "./post.service.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @return {Promise<void>}
 */
export async function CreatePostController(req, res) {
    try {
        const response = await CreatePostService(req, res);
        res.send(sanitize(response));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @return {Promise<void>}
 */
export async function GetPostsController(req, res) {
    try {
        const response = await GetPostsService(req, res);
        res.send(sanitize(response));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @return {Promise<void>}
 */
export async function GetPostController(req, res) {
    try {
        const response = await GetPostService(req, res);
        res.send(sanitize(response));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @return {Promise<void>}
 */
export async function UpdatePostController(req, res) {
    try {
        const response = await UpdatePostService(req, res);
        res.send(sanitize(response));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @return {Promise<void>}
 */
export async function DeletePostController(req, res) {
    try {
        const response = await DeletePostService(req, res);
        res.send(sanitize(response));
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

/**
 * A simple sanitization function to prevent XSS attacks.
 * @param {string} input
 * @return {string}
 */
function sanitize(input) {
    return input.replace(/[&<>"'/]/g, function (match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;'
        };
        return escape[match];
    });
}
