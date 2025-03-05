import { BACKEND_API_URL } from '$env/static/private';
import { delete_, get_, post_, put_ } from './common';

////////////////////////////////////////////////////////////////

export const createFormTemplate = async (
	title: string,
	description: string,
	currentVersion: number,
	tenantCode: string,
	itemsPerPage: string,
	type: string,
	ownerUserId: string,
	defaultSectionNumbering: boolean | undefined
) => {
	const body = {
		Title: title,
		...(description && { Description: description }),
		// Description: description ? description : '',
		...(currentVersion && { CurrentVersion: currentVersion }),
		// CurrentVersion: currentVersion ? currentVersion : null,
		...(tenantCode && { TenantCode: tenantCode }),
		// TenantCode: tenantCode ? tenantCode : null,
		ItemsPerPage: itemsPerPage ? itemsPerPage : null,
		Type: type,
		OwnerUserId: ownerUserId ? ownerUserId : null,
		DefaultSectionNumbering: defaultSectionNumbering ? defaultSectionNumbering : false
	};
	const url = BACKEND_API_URL + '/form-templates';
	return await post_(url, body);
};

export const getFormTemplateById = async (
	searchParams?: any
) => {
	let searchString = '';
	if (searchParams) {
		const keys = Object.keys(searchParams);
		if (keys.length > 0) {
			searchString = '?';
			const params = [];
			for (const key of keys) {
				if (searchParams[key]) {
					const param = `${key}=${searchParams[key]}`;
					params.push(param);
				}
			}
			searchString += params.join('&');
		}
	}
	const url = BACKEND_API_URL + `/form-templates/search${searchString}`;
	return await get_(url);
};

export const getFormTemplatePreviewById = async (
	templateId: string
) => {
	const url = BACKEND_API_URL + `/form-templates/${templateId}/preview`;
	return await get_(url);
};

export const getFormTemplateDetails = async (
	assessmentTemplateId: string
) => {
	const url = BACKEND_API_URL + `/form-templates/${assessmentTemplateId}/details`;
	return await get_(url);
};

export const getAllFormTemplate = async () => {
	const url = BACKEND_API_URL + `/form-templates/all`;
	return await get_(url);
};

// export const getAssessmentTemplateById = async (
// 	sessionId: string,
// 	assessmentTemplateId: string
// ) => {
// 	const url = BACKEND_API_URL + `/clinical/assessment-templates/${assessmentTemplateId}`;
// 	return await get_(sessionId, url, true);
// };

// export const searchFormTemplates = async (searchParams?: any) => {
// 	let searchString = '';
// 	if (searchParams) {
// 		const keys = Object.keys(searchParams);
// 		if (keys.length > 0) {
// 			searchString = '?';
// 			const params = [];
// 			for (const key of keys) {
// 				if (searchParams[key]) {
// 					const param = `${key}=${searchParams[key]}`;
// 					params.push(param);
// 				}
// 			}
// 			searchString += params.join('&');
// 		}
// 	}
// 	const url = `http://localhost:7272/api/v1/clinical/assessment-templates/search${searchString}`;
// 	return await get_(sessionId, url, true);
// };

export const updateFormTemplate = async (
	// sessionId: string,
	formTemplateId: string,
	title: string,
	description: string,
	currentVersion: number,
	tenantCode: string,
	type: string,
	displayCode: string,
	ownerUserId: string,
	rootSectionId: string,
	defaultSectionNumbering: boolean
) => {
	const body = {
		Title: title,
		Description: description ? description : null,
		Type: type,
		CurrentVersion: currentVersion ? currentVersion : null,
		TenantCode: tenantCode ? tenantCode : null,
		DisplayCode: displayCode ? displayCode : null,
		OwnerUserId: ownerUserId ? ownerUserId : null,
		ScoringApplicable: rootSectionId ? rootSectionId : null,
		DefaultSectionNumbering: defaultSectionNumbering ? defaultSectionNumbering : null
	};

	const url = BACKEND_API_URL + `/form-templates/${formTemplateId}`;
	return await put_(url, body);
};

export const deleteFormTemplate = async (formTemplateId: string) => {
	const url = BACKEND_API_URL + `/form-templates/${formTemplateId}`;
	return await delete_(url);
};
