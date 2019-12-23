package com.cognizant.bookingservice.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
public class User {
	@NotNull(message = "Id should be a number")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private long id;
	@NotNull
	@NotBlank
	@Size(min = 1, max = 30, message = "Invalid user name")
	@Column(name = "us_user_name")
	private String userName;
	@Column(name = "us_first_name")
	private String firstName;
	@Column(name = "us_last_name")
	private String lastName;
	@Column(name = "us_password")
	private String password;
	@Column(name = "us_age")
	private int age;
	@Column(name = "us_gender")
	private String gender;
	@Column(name = "us_contact_number")
	private long contactNo;
	@Column(name = "us_email_id")
	private String emailId;
	@Column(name = "us_branch")
	private String branch;
	@Column(name = "us_active")
	private boolean active;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private Set<Role> roleList;

	public User() {
		super();
	}

	public User(@NotNull(message = "Id should be a number") int id,
			@NotNull @NotBlank @Size(min = 1, max = 30, message = "Invalid user name") String userName,
			String firstName, String lastName, String password, int age, String gender, long contactNo, String emailId,
			String branch, boolean active, Set<Role> roleList) {
		super();
		this.id = id;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.age = age;
		this.gender = gender;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.branch = branch;
		this.active = active;
		this.roleList = roleList;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Set<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + ", age=" + age + ", gender=" + gender + ", contactNo=" + contactNo
				+ ", emailId=" + emailId + ", branch=" + branch + ", active=" + active + ", roleList=" + roleList + "]";
	}

}
