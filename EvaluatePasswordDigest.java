package com.apigeesample;

import static java.nio.charset.StandardCharsets.UTF_8;

import java.security.MessageDigest;
import java.util.Base64;

import com.apigee.flow.execution.ExecutionContext;
import com.apigee.flow.execution.ExecutionResult;
import com.apigee.flow.execution.spi.Execution;
import com.apigee.flow.message.MessageContext;


public class EvaluatePasswordDigest implements Execution {

	public ExecutionResult execute(MessageContext messageContext, ExecutionContext executionContext) {
		
		try {
			String password = messageContext.getVariable("private.valid_password");
			String nonceBase64Encoded = messageContext.getVariable("soap.nonce");
			String createdDateAsString = messageContext.getVariable("soap.created");
			byte[] decodednoncebytes = Base64.getDecoder().decode(nonceBase64Encoded);		
			MessageDigest sha1MessageDigest = MessageDigest.getInstance("SHA-1");
			sha1MessageDigest.update(decodednoncebytes);
			sha1MessageDigest.update(createdDateAsString.getBytes(UTF_8));
			sha1MessageDigest.update(password.getBytes(UTF_8));
			String passwordDigestBase64Encoded = Base64.getEncoder().encodeToString(sha1MessageDigest.digest());
			messageContext.setVariable("PasswordDigest", passwordDigestBase64Encoded);
            return ExecutionResult.SUCCESS;

		} catch (Exception e) {
			return ExecutionResult.ABORT;
		}
	}
}