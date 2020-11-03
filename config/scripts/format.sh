formatCode() {
	node_modules/.bin/prettier \
	--config config/lint/.prettierrc \
	--ignore-path .gitignore \
	--write ${@:-'**/*.{js, jsx, html, md, json}'}
}

formatStyles() {
	node_modules/.bin/prettier \
	--config config/lint/.prettierrc \
	--ignore-path .gitignore \
	--write ${@:-'**/*.{css, scss, less}'}
}

format() {
	formatCode && formatStyles
}