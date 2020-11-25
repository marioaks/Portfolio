import tw, { styled } from 'twin.macro';

export const H1 = styled.h1(({ paragraph, primary }) => [
	tw`
		font-header-serif 
		text-header-1 
		font-header-1 
		tracking-header-1 
		leading-header-1 
		text-left 
		m-0
		xs:text-header-1xs
		xs:tracking-header-1xs
		xs:leading-header-1xs
	`,
	paragraph && tw`mb-header-1xs xs:mb-header-1xs`,
	primary && tw`text-primary`
]);

export const H2 = styled.h2(({ paragraph, primary }) => [
	tw`
		font-header-serif 
		text-header-2
		font-header-2
		tracking-header-2
		leading-header-2
		text-left 
		m-0
		xs:text-header-2xs
		xs:tracking-header-2xs
		xs:leading-header-2xs
	`,
	paragraph && tw`mb-header-2 xs:mb-header-2xs`,
	primary && tw`text-primary`
]);

export const H3 = styled.h3(({ paragraph, primary }) => [
	tw`
		font-header-sans 
		text-header-3
		font-header-3
		tracking-header-3
		leading-header-3
		text-left 
		m-0
	`,
	paragraph && tw`mb-header-3`,
	primary && tw`text-primary`
]);

export const H4 = styled.h4(({ paragraph, primary }) => [
	tw`
		font-body-serif 
		text-header-4
		font-header-4
		tracking-header-4
		leading-header-4
		text-left 
		m-0
	`,
	paragraph && tw`mb-header-4`,
	primary && tw`text-primary`
]);

export const H5 = styled.h4(({ paragraph, primary }) => [
	tw`
		font-header-sans 
		text-header-5
		font-header-5
		tracking-header-5
		leading-header-5
		text-left 
		m-0
	`,
	paragraph && tw`mb-header-5`,
	primary && tw`text-primary`
]);

export const H6 = styled.h4(({ paragraph, primary }) => [
	tw`
		font-header-sans 
		text-header-6
		font-header-6
		tracking-header-6
		leading-header-6
		text-left 
		m-0
	`,
	paragraph && tw`mb-header-6`,
	primary && tw`text-primary`
]);

export const P1 = styled.p(({ paragraph, primary }) => [
	tw`
		font-body-serif 
		text-body-1
		font-body-1
		tracking-body-1
		leading-body-1
		text-left 
		m-0
	`,
	paragraph && tw`mb-body-1`,
	primary && tw`text-primary`
]);

export const P2 = styled.p(({ paragraph, primary }) => [
	tw`
		font-body-sans 
		text-body-2
		font-body-2
		tracking-body-2
		leading-body-2
		text-left 
		m-0
	`,
	paragraph && tw`mb-body-2`,
	primary && tw`text-primary`
]);

export const Quote = styled.p(({ paragraph, primary }) => [
	tw`
		font-body-serif 
		text-body-quote
		font-body-quote
		tracking-body-quote
		leading-body-quote
		text-left 
		m-0
		italic
		text-gray-midDark
	`,
	paragraph && tw`mb-body-quote`,
	primary && tw`text-primary`
]);

export const Caption = styled.p(({ paragraph, primary }) => [
	tw`
		font-body-serif 
		text-body-imageCaption
		font-body-imageCaption
		tracking-body-imageCaption
		leading-body-imageCaption
		text-center 
		m-0
	`,
	paragraph && tw`mb-body-imageCaption`,
	primary && tw`text-primary`
]);
