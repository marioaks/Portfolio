lintMarkdown() {
	remark src/posts/
}

lintCode() {
	echo "linting files"
	node_modules/.bin/eslint \
	--fix \
	--config config/lint/.eslintrc \
	--ignore-path .gitignore \
	--cache \
	--cache-location 'config/lint/cache/.eslintcache' \
	${@:-'**/*.{js,jsx}'}
}

lintStyles() {
	echo "style-linting files"
	node_modules/.bin/stylelint \
	--fix \
	--config config/lint/.stylelintrc \
	--ignore-path .gitignore \
	--cache \
	--cache-location 'config/lint/cache/.stylelintcache' \
	${@:-'**/*.{css,scss,less}'}
}

lint() {
	lintMarkdown && lintCode && lintStyles
}