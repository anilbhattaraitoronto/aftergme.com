import { writable } from 'svelte/store';

export const user = writable(localStorage.getItem('user')|| null)