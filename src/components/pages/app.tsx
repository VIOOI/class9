import { Title } from "@molecules/title";
import { createRoute } from "atomic-router";

import { Component, createSignal, Show } from "solid-js";

export const appRoute = createRoute();

export const App: Component = () => {
const [ isShow, setIsShow ] = createSignal(true);
	return (
		<div class="w-screen h-screen bg-dark-900 flex-col-center">
			<div 
				class="flex-center h-20vh"
				onclick={() => setIsShow(!isShow())}
			>
				<Show when={isShow()}>
					<h1 class="font-Roboto text-2rem lg:text-10rem text-red-500">Крым НАШ</h1>
				</Show>
				<Show when={!isShow()}>
					<h1 class="font-Roboto text-2rem lg:text-10rem text-red-500">Панки хой</h1>
				</Show>
			</div>
			<div class="flex-col-center h-80vh">
				<div class="w-90vw lg:w-50vw h-10vh bg-white"></div>
				<div class="w-90vw lg:w-50vw h-10vh bg-blue-500"></div>
				<div class="w-90vw lg:w-50vw h-10vh bg-red-500"></div>
			</div>
		</div>
	);
};
