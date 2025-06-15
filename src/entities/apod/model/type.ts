export interface Apod {
	date: string // Дата публикации
	explanation: string // Описание изображения
	hdurl?: string // Ссылка на HD-изображение (не всегда есть)
	media_type: 'image' | 'video' // Тип контента (картинка или видео)
	service_version: string // Версия API
	title: string // Заголовок
	url: string // Ссылка на изображение или видео
	copyright?: string // Автор, если указан
}
